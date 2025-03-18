import { createContext } from 'react';

const authContext = createContext();
export const AuthProvider = ({ children }) => {
  return <>{children}</>;
};

export default index;
