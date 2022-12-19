import { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { ResponseInterface } from "../types/interfaces";

axios.defaults.baseURL = "https://no23.lavina.tech";
let host = "GEThttps://no23.lavina.tech/books";

const useAxios = (url: string, payload: ResponseInterface | undefined) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [created, setCreated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { data } = payload as ResponseInterface;

  const fetchData = () => {
    const signStr = CryptoJS.MD5(host + data.secret).toString();

    axios
      .get(url, { headers: { Key: data.key, Sign: signStr } })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [created, deleted]);

  return { response, error, loading, setCreated, setDeleted };
};

export default useAxios;
