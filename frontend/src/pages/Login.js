import React, { useState } from 'react';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom';
import axios from 'axios';

// component
import Page from '../components/Page';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = async (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }

          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, user)
            .then((res) => {
                console.log(res)
              localStorage.setItem("Authorization", res.data.token);
              localStorage.setItem("Role", res.data.user.role);
              localStorage.setItem("userId", res.data.user._id);
              window.location = '/app/home';
            })
            .catch((error) => {
              console.log(error.message);
              alert('check email or password!');
            })
    }

    return (
        <Page title="Login">
            <Container maxWidth="sm">
                <Box sx={{ my: 3 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Ecologital
                    </Typography>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Sign In
                    </Typography>
                    <Box sx={{ width: '100%', boxShadow: 5, borderRadius: 3, my: 3, p: 5 }}>
                        <form onSubmit={onSignIn}>
                            <TextField
                                required
                                sx={{ mb: 2, width: '100%' }}
                                id="outlined-required"
                                label="Email"
                                type="email"
                                placeholder="example@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                required
                                sx={{ mb: 2, width: '100%' }}
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                endIcon={<SendIcon />}
                                sx={{ mb: 2 }}
                                disableElevation
                                type="submit" >
                                Login
                            </Button>
                        </form>
                        <Link to="/register">Create new Account</Link>
                    </Box>
                </Box>
            </Container>
        </Page>
    )
}

export default Login