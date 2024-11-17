import React, { createContext, useContext } from 'react';

export const themeStyle = {
  primary: {
    main: '#3f51b5',
    text: '#fff',
  },
  secondary: {
    main: '#f50057',
    text: '#fff',
  },
};

const ThemeContext = createContext(themeStyle);

type Theme = {
  children: React.ReactNode;
};
export const Theme = ({ children }: Theme) => {
  return (
    <ThemeContext.Provider value={themeStyle}>
      ThemeContainer
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContainer = () => {
  return (
    <Theme>
      <Box />
    </Theme>
  );
};

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ padding: `10px`, border: `5px solid ${theme.primary.main}` }}>
      Box
    </div>
  );
}