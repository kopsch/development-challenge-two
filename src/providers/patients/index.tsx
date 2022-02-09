import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { IPatient } from "../../interfaces";

interface PatientsContextData {
  patients: IPatient[];
  addPatient: (data: IPatient) => void;
  updatePatient: (id: string, updateKey: string, updateValue: string) => void;
  deletePatient: (id: string) => void;
}

interface ProductProps {
  children: ReactNode;
}

const PatientsContext = createContext<PatientsContextData>(
  {} as PatientsContextData
);

export const PatientsProvider = ({ children }: ProductProps) => {
  const [patients, setPatients] = useState([]);

  const getAllPatients = () => {
    api
      .get("/patients")
      .then((response) => setPatients(response.data))
      .catch((err) => {
        console.log(err);
        toast.error("Algo deu errado");
      });
  };

  const addPatient = async (data: IPatient) => {
    await api
      .post("/patient", data)
      .then((_) => toast.success("Paciente adicionado"))
      .catch((_) => toast.error("Algo deu errado"));
  };

  const updatePatient = async (
    id: string,
    updateKey: string,
    updateValue: string
  ) => {
    const data = {
      id: id,
      updateKey: updateKey,
      updateValue: updateValue,
    };

    await api
      .patch("/patient", data)
      .then((_) => toast.success("Paciente atualizado"))
      .catch((_) => toast.error("Algo deu errado"));
  };

  const deletePatient = async (id: string) => {
    await api
      .delete("/patient", { data: { id: id } })
      .then((_) => toast.success("Paciente deletado"))
      .catch((_) => toast.error("Algo deu errado"));
  };

  useEffect(() => getAllPatients(), []);

  return (
    <PatientsContext.Provider
      value={{ addPatient, deletePatient, patients, updatePatient }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatient = () => useContext(PatientsContext);