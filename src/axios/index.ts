import axios from "axios";
import CryptoJS from "crypto-js";
import { UserInterface, ResponseInterface } from "../types/interfaces";

const base = "https://no23.lavina.tech";
const userInfo = localStorage.getItem("userInfo");
if (userInfo) {
  var user = JSON.parse(userInfo);
}

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

export const editStatusReq = async (status: number) => {};

export const deleteBookReq = async (id: number) => {
  const signStr = CryptoJS.MD5(
    `DELETEhttps://no23.lavina.tech/books/${id}secret`
  ).toString();
  console.log(signStr);

  axios.delete(`https://no23.lavina.tech/books/${id}`, {
    headers: {
      Key: user?.data.key,
      Sign: signStr,
    },
  });
};
