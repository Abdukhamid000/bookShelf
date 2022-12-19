import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import CryptoJS from "crypto-js";
import { AuthContext, AuthProviderInterface } from "../Provider/AuthProvider";
import { Button } from "@mui/material";
import { Datum, RootObject } from "../types/interfaces";
import MediaCard from "./Card";
import Grid from "@mui/material/Grid/Grid";
import { Container } from "@mui/system";
import useAxios from "../hooks/useAxios";
import CustomAlert from "./CustomAlert";

const Book = () => {
  const authCtx = useContext<AuthProviderInterface | null>(AuthContext);
  const [books, setBooks] = useState([] as Datum[]);
  const [success, setSuccess] = useState<string>("");
  const [data, setData] = useState({} as RootObject);
  const { response, error, loading, setCreated, setDeleted } = useAxios(
    "/books",
    authCtx?.locUser
  );

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;
  console.log(data);

  const createBook = () => {
    let data = '{\n    "isbn":"9781118464465"\n}';

    let signstr1 = "POSThttps://no23.lavina.tech/books" + data + "secret";
    const signstr2 = CryptoJS.MD5(signstr1).toString();

    let config = {
      method: "post",
      url: "https://no23.lavina.tech/books",
      headers: {
        Key: authCtx?.locUser.data.key,
        Sign: signstr2,
      },
      data: data,
    };

    axios(config).then((res) => {
      setSuccess("created"), setCreated(true);
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={createBook}>
        Create Book
      </Button>
      {!books && <p>Book not created</p>}
      {success && <CustomAlert status="success" text="created" />}
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {!data.data && <p>Not book</p>}
            {data.data?.map(
              (item): React.ReactNode => (
                <MediaCard
                  key={item.book.id}
                  item={item}
                  setDeleted={setDeleted}
                />
              )
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Book;
