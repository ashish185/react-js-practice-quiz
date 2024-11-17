import React from 'react';

/* If not give type Parameter 'props' implicitly has an 'any' type. */

type Person = {
  firstName: string;
  lastName: string;
};

type GreetProps = {
  persons: Person[];
};
/* Or another way */

type GreetProps2 = {
  persons: {
    firstName: string;
    lastName: string;
  }[];
};

export const Greet = ({persons}: GreetProps) => {
  return <div>Greet {persons.map((person) => <div>{`${person.firstName} ${person.lastName}`}</div>)}</div>;
};
