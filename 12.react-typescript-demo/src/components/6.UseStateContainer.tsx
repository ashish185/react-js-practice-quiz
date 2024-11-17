import React, { useState } from 'react'

/**
 * Learning Use State
 * In Use State 
 * type is given in Angle Brackets
 * useState<>(null)
 */
type AuthUser = {
  name: string;
};

export const UseStateContainer = () => {
    const [user, setUser] = useState<null | AuthUser>(null);
    const onButtonClick  =() => {
        setUser({
          name: 'Cheese', /* Because of type inferrer, it does not allow object to set, it thinks that value is null */
        });  /* Error Object literal may only specify known properties, and 'name' does not exist in type */
    }
    return (
      <div>
        <hr></hr>
        UseStateContainer
        <button onClick-={onButtonClick}>Login</button>
        {user?.name} {/* Benefit: Agar hum ? nhi lgaynege to, it gives error: 'user' is possibly 'null' */}
      </div>
    );
}


