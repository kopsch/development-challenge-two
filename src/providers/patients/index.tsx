import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface PatientsContextData {}

interface ProductProps {
  children: ReactNode;
}

const PatientsContext = createContext<PatientsContextData>(
  {} as PatientsContextData
);

export const PatientsProvider = ({ children }: ProductProps) => {
  const [patients, setPatients] = useState([]);

  return (
    <PatientsContext.Provider value={{}}>{children}</PatientsContext.Provider>
  );
};
