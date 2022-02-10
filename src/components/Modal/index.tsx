import { Background, Form, ModalUpdate, Subtitle } from "./styles";
import { useForm } from "react-hook-form";
import { schema as updateSchema } from "../../schemas/updateSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { IdData, IPatient } from "../../interfaces/index";
import { usePatient } from "../../providers/patients";

const Modal = (id: IdData) => {
  const { updatePatient } = usePatient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPatient>({ resolver: yupResolver(updateSchema) });

  return (
    <Background>
      <ModalUpdate>
        <Subtitle>Modificar paciente</Subtitle>
        <Form onSubmit={handleSubmit((data) => updatePatient(data, id))}>
          <TextField
            color="primary"
            sx={{
              width: "100%",
              maxWidth: "260px",
              height: "45px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
            label="Nome"
            {...register("nome")}
            error={!!errors.nome}
            helperText={errors.nome?.message}
          />
          <TextField
            color="primary"
            sx={{
              width: "100%",
              maxWidth: "260px",
              height: "45px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
            label="Date de nascimento"
            {...register("data_de_nascimento")}
            error={!!errors.data_de_nascimento}
            helperText={errors.data_de_nascimento?.message}
          />
          <TextField
            color="primary"
            sx={{
              width: "100%",
              maxWidth: "260px",
              height: "45px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            color="primary"
            sx={{
              width: "100%",
              maxWidth: "260px",
              height: "45px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
            label="Endereço"
            {...register("endereco")}
            error={!!errors.endereco}
            helperText={errors.endereco?.message}
          />
          <Button
            color="primary"
            variant="contained"
            sx={{
              width: "50%",
              maxWidth: "260px",
              height: "45px",
              padding: "0",
              textTransform: "none",
              borderRadius: "8px",
            }}
            type="submit"
          >
            Modificar
          </Button>
        </Form>
      </ModalUpdate>
    </Background>
  );
};

export default Modal;
