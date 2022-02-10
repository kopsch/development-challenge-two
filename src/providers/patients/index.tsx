import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { IdData, IPatient } from "../../interfaces";

interface PatientsContextData {
  patients: IPatient[];
  addPatient: (data: IPatient) => void;
  updatePatient: (data: IPatient, id: IdData) => void;
  deletePatient: (id: string) => void;
  id: boolean | string;
  closeId: () => void;
  openId: (id: string) => void;
  modalIsOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

interface ProductProps {
  children: ReactNode;
}

const PatientsContext = createContext<PatientsContextData>(
  {} as PatientsContextData
);

export const PatientsProvider = ({ children }: ProductProps) => {
  const [patients, setPatients] = useState([]);
  const [id, setId] = useState<string | boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeId = () => {
    setId(false);
  };

  const openId = (id: string) => {
    setId(id);
  };

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
    const id = patients.length + 1
    const payload = {
      ...data,
      id: id.toString()
    }

    await api
      .post("/patient", payload)
      .then((_) => {
        toast.success("Paciente adicionado");
        getAllPatients();
        closeModal();
      })
      .catch((_) => {
        toast.error("Algo deu errado");
        closeModal();
      });
  };

  const updatePatient = async (data: any, { id }: IdData) => {
    Object.keys(data).map(async (key: string) => {
      return (
        data[key] !== "" &&
        (await api
          .put("/patient", {
            id: id,
            updateKey: key,
            updateValue: data[key],
          })
          .then((_) => {
            getAllPatients();
          })
          .catch((_) => console.log(_)))
      );
    });
    toast.success("Usuário modificado");
    closeId();
  };

  const deletePatient = async (id: string) => {
    await api
      .delete("/patient", { data: { id: id } })
      .then((_) => {
        toast.success("Paciente deletado");
        getAllPatients();
      })
      .catch((_) => toast.error("Algo deu errado"));
  };

  useEffect(() => getAllPatients(), []);

  return (
    <PatientsContext.Provider
      value={{
        addPatient,
        deletePatient,
        patients,
        updatePatient,
        id,
        openId,
        closeId,
        closeModal,
        modalIsOpen,
        openModal,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatient = () => useContext(PatientsContext);
