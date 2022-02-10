import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { usePatient } from "../../providers/patients";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "../Modal";

const TablePatient = () => {
  const { patients, deletePatient, openId, id } = usePatient();

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: `var(--gray-20)`,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <TableContainer sx={{ maxWidth: 1170 }} component={Paper}>
        <Table sx={{ maxWidth: 1170 }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: `var(--primary)`,
                  color: `var(--gray-0)`,
                }}
              >
                ID
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: `var(--primary)`,
                  color: `var(--gray-0)`,
                }}
                align="right"
              >
                Nome
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: `var(--primary)`,
                  color: `var(--gray-0)`,
                }}
                align="right"
              >
                Data de Nascimento
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: `var(--primary)`,
                  color: `var(--gray-0)`,
                }}
                align="right"
              >
                Email
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: `var(--primary)`,
                  color: `var(--gray-0)`,
                }}
                align="right"
              >
                Endereço
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: `var(--primary)`,
                  color: `var(--gray-0)`,
                }}
                align="right"
              >
                Deletar
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: `var(--primary)`,
                  color: `var(--gray-0)`,
                }}
                align="right"
              >
                Modificar
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {patients.map((patient) => (
              <StyledTableRow key={patient.id}>
                <TableCell component="th" scope="row">
                  {patient.id}
                </TableCell>
                <TableCell align="right">{patient.nome}</TableCell>
                <TableCell align="right">
                  {patient.data_de_nascimento}
                </TableCell>
                <TableCell align="right">{patient.email}</TableCell>
                <TableCell align="right">{patient.endereco}</TableCell>
                <TableCell align="right">
                  <AiFillDelete
                    style={{ cursor: "pointer" }}
                    onClick={() => deletePatient(patient.id || "")}
                  />
                </TableCell>
                <TableCell align="right">
                  <AiFillEdit
                    style={{ cursor: "pointer" }}
                    onClick={() => openId(patient.id || "")}
                  />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {id && <Modal id={id} />}
    </>
  );
};

export default TablePatient;
