import React from 'react';
import { Person } from '../../types';
import classNames from 'classnames';
import { PersonLink } from '../PersonLink/PersonLink';

interface Props {
  peoples: Person[];
  selectedSlug?: string;
}

export const PeopleTable: React.FC<Props> = ({ peoples, selectedSlug }) => {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {peoples.map(people => (
          <tr
            data-cy="person"
            key={people.slug}
            className={classNames({
              'has-background-warning': selectedSlug === people.slug,
            })}
          >
            <td>
              <PersonLink personName={people.name} peoples={peoples} />
            </td>

            <td>{people.sex}</td>
            <td>{people.born}</td>
            <td>{people.died}</td>
            <td>
              {people.motherName ? (
                <PersonLink personName={people.motherName} peoples={peoples} />
              ) : (
                '-'
              )}
            </td>
            <td>
              {people.fatherName ? (
                <PersonLink personName={people.fatherName} peoples={peoples} />
              ) : (
                '-'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
