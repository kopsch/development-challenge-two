import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  data_de_nascimento: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Formato inválido").required("Campo obrigatório"),
  endereco: yup.string().required("Campo obrigatório"),
});
