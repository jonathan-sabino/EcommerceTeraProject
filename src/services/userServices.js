import userModel from "../models/userSchema";
const bcrypt = require("bcryptjs");

exports.insert = async function (reference) {
  const salt = bcrypt.genSaltSync();
  const password = bcrypt.hashSync(reference.password, salt);

  const user = new userModel({
    name: reference.name,
    cpf: reference.cpf,
    email: reference.email,
    address: reference.address,
    city: reference.city,
    state: reference.state,
    zip_code: reference.zip_code,
    telephone: reference.telephone,
    password: password,
    salt: reference.salt,
  });
};
