import React, { useState } from "react";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import { deleteBookReq } from "../axios";

export default function MediaCard({ item, setDeleted }) {
  const { book, status } = item;

  const deleteBook = (id: number) => {
    deleteBookReq(id).then((res) => setDeleted(true));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={book.cover}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          published: {book.published}, <br /> author: {book.author}, <br />{" "}
          pages: {book.pages}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">update status</Button>
        <Button color="error" onClick={() => deleteBook(book.id)}>
          delete
        </Button>
      </CardActions>
    </Card>
  );
}
