import UserSchema from "../models/userSchema";

const login = (req, res) => {
  // verificar se existe um email cadastrado no bd
  // criptografar a senha para que ela gere o mesmo hash que contem no bd
  // verificar se o hash do bd é igual ao hash criado ao criptografar a senha
  // gerar tocken com jwt
};

export default {
  login,
};
