import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// component
import Page from '../components/Page';

import axios from 'axios';

const Profile = () => {

    const _id = localStorage.getItem("userId");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isActive, setisActive] = useState(true);

    useEffect(() => {
        getUser()
    }, []);

    const getUser = async () => {

        const config = {
            headers: {
                Authorization: localStorage.getItem("Authorization"),
            },
        };

        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/getuser/${_id}`, config)
            .then((res) => {
                setName(res.data.data.username)
                setEmail(res.data.data.email)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const onUpdate = async (e) => {
        e.preventDefault();
        const user = {
            email: email,
            username: name
        }
        const config = {
            headers: {
                Authorization: localStorage.getItem("Authorization"),
            },
        };

        await axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/update/${_id}`, user, config)
            .then((res) => {
                console.log(res)
                getUser()
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <Page title="Profile">
            <Container maxWidth="sm">
                <Box sx={{ my: 3 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Profile
                    </Typography>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Check and update
                    </Typography>
                    <Box sx={{ width: '100%', boxShadow: 5, borderRadius: 3, my: 3, p: 5 }}>
                        <form onSubmit={onUpdate}>
                            <TextField
                                required
                                disabled={isActive}
                                sx={{ mb: 2, width: '100%' }}
                                id="outlined-name-input"
                                label="Name"
                                placeholder="Steve"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                required
                                disabled={isActive}
                                sx={{ mb: 2, width: '100%' }}
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                placeholder="example@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Button
                                variant="contained"
                                color="success"
                                endIcon={<SaveIcon />}
                                sx={{ mb: 2, mr: 2 }}
                                disableElevation
                                type="submit" >
                                update
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<EditIcon />}
                                sx={{ mb: 2, mr: 2 }}
                                disableElevation
                                type="button"
                                onClick={() => setisActive(!isActive)} >
                                edit
                            </Button>

                        </form>
                    </Box>

                </Box>
            </Container>
        </Page>
    )
}

export default Profile;