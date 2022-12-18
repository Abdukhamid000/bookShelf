import React, { useRef, useContext } from "react";
import { AuthContext, AuthProviderInterface } from "../Provider/AuthProvider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import bookImg from "../assets/book.jpg";

const SignUp = () => {
  const nameInput = React.useRef<HTMLInputElement>(null);
  const emailInput = React.useRef<HTMLInputElement>(null);
  const keyInput = React.useRef<HTMLInputElement>(null);
  const secretInput = React.useRef<HTMLInputElement>(null);
  const userCtx = useContext<AuthProviderInterface | null>(AuthContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValues = {
      name: nameInput.current?.value,
      email: emailInput.current?.value,
      key: keyInput.current?.value,
      secret: secretInput.current?.value,
    };

    console.log(inputValues);

    // console.log(inputValues);
    userCtx?.registerUser(inputValues);
  };

  return (
    // <form onSubmit={submitHandler}>
    //   <label htmlFor="name">Name:</label>
    //   <input type="text" id="name" name="name" ref={nameInput} />

    //   <label htmlFor="email">Email:</label>
    //   <input type="email" id="email" name="email" ref={emailInput} />

    //   <label htmlFor="key">Key:</label>
    //   <input type="text" id="key" name="key" ref={keyInput} />

    //   <label htmlFor="name">Secret:</label>
    //   <input type="text" id="secret" name="secret" ref={secretInput} />

    //   <button type="submit">show</button>

    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${bookImg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="text"
              inputRef={nameInput}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              inputRef={emailInput}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="key"
              label="Key"
              type="text"
              inputRef={keyInput}
              id="key"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="secret"
              label="Secret"
              type="text"
              inputRef={secretInput}
              id="secret"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Already have account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
    // </form>
  );
};

export default SignUp;
