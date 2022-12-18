import * as React from "react";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import { deleteBookReq } from "../axios";

export default function MediaCard(e: React.MouseEvent<HTMLElement>) {
  const deleteBook = (id: number) => {
    deleteBookReq(id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">update status</Button>
        <Button color="error" onClick={() => deleteBook(1)}>
          delete
        </Button>
      </CardActions>
    </Card>
  );
}
