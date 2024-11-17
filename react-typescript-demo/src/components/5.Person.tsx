import React from 'react';
import { PersonProp } from './5.Person.types';

const PersonContainer = () => {
  const persons = [
    { firstName: 'Donald', lastName: 'Trump' },
    { firstName: 'Joe', lastName: 'Biden' },
  ];
  return (
    <div>
      PersonContainer
      <PersonChild names={persons} />
    </div>
  );
};

const PersonChild = ({ names }: PersonProp) => {
  return (
    <div>
      <hr></hr>
      {names.map((name) => (
        <div>{`${name.firstName} ${name.lastName}`}</div>
      ))}
      <hr></hr>
    </div>
  );
};
export default PersonContainer;
