import axios from "axios";
import CryptoJS from "crypto-js";
import { UserInterface, ResponseInterface } from "../types/interfaces";

let data = '{\n    "isbn":"9781118464467"\n}';
const base = "https://no23.lavina.tech";

export const signUp = async (inputValues: UserInterface) => {
  try {
    const { data } = await axios.post<ResponseInterface>(
      base + "/signup",
      inputValues
    );
    console.log(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      return error.message;
    }
  }
};

export const editStatusReq = async (status: number) => {

}

export const deleteBookReq = async (id: number) => {
  const { data } = await axios.delete(base + "delete/:" + id);
  return data;
};
