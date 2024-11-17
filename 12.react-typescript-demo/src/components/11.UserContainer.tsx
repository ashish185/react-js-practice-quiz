/* 
Scenario When context value is know at future.
*/

import React, { createContext, useState, useContext } from 'react';
type AUTH_USER = {
  name: string;
  email: string;
};

type UserContextProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: AUTH_USER | null;
  setUser: React.Dispatch<React.SetStateAction<AUTH_USER | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<AUTH_USER | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* 
        Error:
      Type '{ user: AUTH_USER | null; setState: React.Dispatch<React.SetStateAction<AUTH_USER | null>>; }' is not assignable to type 'null'

      Solution:
      To give createContext(null)
      to some type.
      Therefore need to create UserContextType
      */}
      ThemeContainer
      {children}
    </UserContext.Provider>
  );
};


const UserContainer = () => {
    return (
      <div>
        <UserContextProvider>
          <User />
        </UserContextProvider>
      </div>
    );
};

const User = () => {
  const userContextNew = useContext(UserContext);
  console.log('userContextNew', userContextNew);
  
  const onLogin = () => {
    debugger;
    if (userContextNew?.setUser) {
      userContextNew.setUser({
        name: 'Bhagat',
        email: 'Singh',
      });
    }
  };

  const onLogout = () => {
    if (userContextNew?.setUser) {
      userContextNew.setUser(null);
    }
  };
  return (
    <div>
      <hr></hr>
      UseStateContainer
      <div>
        <button onClick={onLogin}>Login</button>
        <button onClick={onLogout}>Log out</button>
      </div>
      <div>User Name is {`${userContextNew?.user?.name}`}</div>
      {/* Benefit: Agar hum ? nhi lgaynege to, it gives error: 'user' is possibly 'null' */}
    </div>
  );
};

export default UserContainer;
