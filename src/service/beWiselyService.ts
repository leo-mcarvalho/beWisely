import axios from "axios";
import { User } from "../interfaces/user";
import { makeData } from "../utils/makeData";

export function getTutorsByQuery(query: string) {
  const res = makeData()
  return res
}

export async function authenticate(login: string, password: string) {
  const obj = {
    email: login,
    senha: password
  }
  const res = await axios.post('http://localhost:8080/api/auth/login', obj).catch((e) => { return e })
  return res.response.data
}

export async function createAccount(user: User) {
  const res = await axios.post('http://localhost:8080/api/auth/registrar', user)
  return res
}