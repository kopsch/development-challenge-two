import { ReactNode } from "react";
import { PatientsProvider } from "./patients";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <PatientsProvider>
      { children }
    </PatientsProvider>
  );
};

export default Providers;
