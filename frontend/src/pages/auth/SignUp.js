import React, { useState } from "react";
import { setUserSession, useFormInput, useFormFields } from "../../Utils/Common";
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import {
  FormControl,
  Input,
  InputLabel,
  Button as MuiButton,
  Paper,
  Typography
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Button = styled(MuiButton)(spacing);

const Wrapper = styled(Paper)`
  padding: ${props => props.theme.spacing(6)}px;

  ${props => props.theme.breakpoints.up("md")} {
    padding: ${props => props.theme.spacing(10)}px;
  }
`;


const Root = styled.div`
max-width: 520px;
margin: 0 auto;
justify-content: center;
align-items: center;
display: flex;
min-height: 100%;
`;

const GlobalStyle = createGlobalStyle`
html,
body,
#root {
height: 100%;
}
body {
background: ${props => props.theme.body.background};
}
`;


function SignUp(props) {


  const [fields, handleFieldChange] = useFormFields({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const username = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const confirmPassword = useFormInput('');

  async function handleSignUp(){
    setError(null);
    setLoading(true);
    const url = 'http://51.158.103.243:8000/register/?format=json';
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      })
    };

    const response = await fetch(url, options);
    const json = await response.json();
    if ([200, 201].includes(response.status)){
      setError(JSON.stringify(json) + " " + "Signup successful, you can login there /auth/sign-in");
    }
    else{
      console.log(response);
      console.log(json);
      console.log(typeof response);
      setError(JSON.stringify(json));
      props.history.push('/auth/sign-up');
    }
  }
  const validateForm = (event) => {
    return (
      email.value.length > 0 &&
      password.value.length > 0 &&
      password.value === confirmPassword.value
    );
  }


  return (
    <Root>
    <CssBaseline />
    <GlobalStyle />
      <Wrapper>
        <Helmet title="Sign Up" />
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Get started
        </Typography>
        <Typography component="h2" variant="body1" align="center">
          Welcome at Lobstr !
        </Typography>
        <form>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              onChange={validateForm} autoFocus
              name="username"
              type="username"
              id="username"
              autoComplete="username"
              {...username}
            />

          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email"
              onChange={(e)=>this.validateForm(e)}
              name="email"
              type="email"
              autoComplete="email"
              {...email}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              onChange={(e)=>this.validateForm(e)}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...password}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <Input
              onChange={(e)=>this.validateForm(e)}
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              autoComplete="confirm-password"
              {...confirmPassword}
            />
          </FormControl>

          <Button
            component={Link}
            onClick={handleSignUp}
            fullWidth
            disabled={!validateForm()}
            variant="contained"
            color="primary"
            mt={2}
          >
            Sign up
          </Button>
          <Alert severity="error" align="center">
            { error }
        </Alert>

        </form>

      </Wrapper>
      </Root>


  );
}

export default SignUp;
