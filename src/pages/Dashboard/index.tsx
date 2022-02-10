import TablePatient from "../../components/TablePatient";
import { Container, DivButton, FullPage } from "./styles";
import { Button } from "@mui/material";
import { usePatient } from "../../providers/patients";
import ModalCreate from "../../components/ModalCreate";
import Header from "../../components/Header";
import { AiOutlineUserAdd } from "react-icons/ai";

const Dashboard = () => {
  const { openModal, modalIsOpen } = usePatient();

  return (
    <FullPage>
      <Header/>
      <Container>
        <DivButton>
          <Button
            onClick={openModal}
            color="primary"
            variant="contained"
            sx={{
              width: "300px",
              height: "45px",
              padding: "0",
              textTransform: "none",
              borderRadius: "5px",
            }}
            type="submit"
          >
            ADICIONAR PACIENTE <AiOutlineUserAdd size="18px" style={{marginLeft: '10px'}}/>
          </Button>
        </DivButton>
        <TablePatient />
      </Container>
      {modalIsOpen && <ModalCreate />}
    </FullPage>
  );
};

export default Dashboard;
