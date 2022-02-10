import * as yup from 'yup'

export const schema = yup.object().shape({
    nome: yup.string(),
    data_de_nascimento: yup.string(),
    email: yup.string().email("Formato inválido"),
    endereco: yup.string()
})