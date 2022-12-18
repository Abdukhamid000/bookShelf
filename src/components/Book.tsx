import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import CryptoJS from "crypto-js";
import { AuthContext, AuthProviderInterface } from "../Provider/AuthProvider";
import { Button } from "@mui/material";
import { Datum, RootObject } from "../types/interfaces";
import MediaCard from "./Card";
import Grid from "@mui/material/Grid/Grid";
import { Container } from "@mui/system";

type Props = {
  userInfo: {};
};

const Book = () => {
  const authCtx = useContext<AuthProviderInterface | null>(AuthContext);
  const [books, setBooks] = useState([] as Datum[]);
  const [success, setSuccess] = useState<string>("");

  const user = localStorage.getItem("userInfo");
  let userInfo = "";
  if (user) {
    userInfo = JSON.parse(user);
  }
  // console.log(userInfo?.data.secret);
  // console.log(userInfo?.data.key);

  // const key = userInfo?.data.key;

  // useEffect(() => {
  //   const signstr = CryptoJS.MD5(
  //     "GEThttps://no23.lavina.tech/books" + "secret"
  //   ).toString();
  //   axios
  //     .get<RootObject>("https://no23.lavina.tech/books", {
  //       headers: { Key: key, Sign: signstr },
  //     })
  //     .then((res) => setBooks(res.data.data));
  // }, [userInfo]);
  // console.log(books);

  const createBook = () => {
    let data = '{\n    "isbn":"9781118464465"\n}';

    let signstr1 = "POSThttps://no23.lavina.tech/books" + data + "secret";
    const signstr2 = CryptoJS.MD5(signstr1).toString();

    let config = {
      method: "post",
      url: "https://no23.lavina.tech/books",
      headers: {
        Key: key,
        Sign: signstr2,
      },
      data: data,
    };

    axios(config).then((res) => setSuccess("created"));
  };

  return (
    <div>
      <Button variant="contained" onClick={createBook}>
        Create Book
      </Button>
      {!books && <p>Book not created</p>}
      {success && <p>Created</p>}
      {/* {books?.map(
        (item): React.ReactNode => (
          <ul key={item.book.id}>
            <li>{item.book.author}</li>
            <li>{item.book.title}</li>
            <li>{item.book.published}</li>
            <img src={item.book.cover} alt="cover" />
          </ul>
          )
          )} */}
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MediaCard />
          </Grid>
          <Grid item xs={6}>
            <MediaCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Book;
