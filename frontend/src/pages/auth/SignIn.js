import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Helmet from 'react-helmet';
import { CssBaseline } from "@material-ui/core";
import styled, { createGlobalStyle } from "styled-components";
import Alert from '@material-ui/lab/Alert';



import {setUserSession, setUserInfos, useFormInput} from "../../Utils/Common";


import {
  Avatar,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Button as MuiButton,
  Paper,
  Typography
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

axios.defaults.withCredentials = true;

const Button = styled(MuiButton)(spacing);

const Wrapper = styled(Paper)`
  padding: ${props => props.theme.spacing(6)}px;

  ${props => props.theme.breakpoints.up("md")} {
    padding: ${props => props.theme.spacing(10)}px;
  }
`;

const BigAvatar = styled(Avatar)`
  width: 92px;
  height: 92px;
  text-align: center;
  margin: 0 auto ${props => props.theme.spacing(5)}px;
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


function SignIn(props) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const email = useFormInput('');
  const password = useFormInput('');
 
  // handle button click of login form
  async function handleLogin() {
    setError(null);
    setLoading(true);
    const url = 'http://51.158.103.243:8000/login/?format=json';
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    };
    const response = await fetch(url, options)
    const json = await response.json();
    if ([200, 201].includes(response.status)){
      console.log(json); 
      setUserSession(json.token);
      await getUserInfos();
      props.history.push('/profile');            
    }
    else{
      console.log(response);
      console.log(json);
      setError(JSON.stringify(json));
    }

  }

  async function getUserInfos() {
    
    const url = 'http://51.158.103.243:8000/user/?format=json';
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': 'Token ' + sessionStorage.getItem('token')
      },
    };
    const response = await fetch(url, options)
    const json = await response.json();
    console.log(json);
    const infos = json[0];
    const email = infos.email;
    const username = infos.username;
    const date_joined = infos.date_joined;
    setUserInfos(email, username, date_joined);
}



  return (
    <Root>
    <CssBaseline />
    <GlobalStyle />
      <Wrapper>
        <Helmet title="Sign In" />
        <BigAvatar alt="Picture" src="" />

        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Welcome at Lobstr !
        </Typography>
        <Typography component="h2" variant="body1" align="center">
          Sign in to your account to continue
        </Typography>
        <form>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" {...email} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...password}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            component={Link}
            onClick={handleLogin}
            fullWidth
            variant="contained"
            color="primary"
            mb={2}
          >
            Sign in
          </Button>
          <Button
            component={Link}
            to="/auth/reset-password"
            fullWidth
            color="primary"
          >
            Forgot password
          </Button>
          <Alert severity="error" align="center">
            { error }
          </Alert>

        </form>
      </Wrapper>
      </Root>

  );
}


//const setUserSession = (token) => {
//  sessionStorage.setItem('token', token);
//}


export default SignIn;
