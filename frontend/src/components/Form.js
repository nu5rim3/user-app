import React, { useState } from 'react';
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import axios from 'axios';

const Form = ({ item, getAllUser }) => {

    const [name, setName] = useState(item.username);
    const [email, setEmail] = useState(item.email);
    const [isActive, setisActive] = useState(true);

    const onUpdate = async () => {
        const user = {
            email: email,
            username: name
        }
        const config = {
            headers: {
                Authorization: localStorage.getItem("Authorization"),
            },
        };

        await axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/update/${item._id}`, user, config)
            .then((res) => {
            })
            .catch((error) => {
                console.log(error.message);
            })
    }


    const onDelete = async () => {
        const config = {
            headers: {
                Authorization: localStorage.getItem("Authorization"),
            },
        };

        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/delete/${item._id}`, config)
            .then((res) => {
                getAllUser()
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <Box sx={{ width: '100%', boxShadow: 5, borderRadius: 3, my: 3, p: 5 }}>
            <form>
                <TextField
                    required
                    disabled={isActive}
                    sx={{ mb: 2, width: '100%' }}
                    label="Name"
                    placeholder="Steve"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    required
                    disabled={isActive}
                    sx={{ mb: 2, width: '100%' }}
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
                    type="button"
                    onClick={() => onUpdate()}
                >
                    update
                </Button>
                <Button
                    variant="contained"
                    endIcon={<EditIcon />}
                    sx={{ mb: 2, mr: 2 }}
                    disableElevation
                    type="button"
                    onClick={() => setisActive(!isActive)}
                >
                    edit
                </Button>
                <Button
                    variant="contained"
                    color="warning"
                    endIcon={<DeleteIcon />}
                    sx={{ mb: 2, mr: 2 }}
                    disableElevation
                    type="button"
                    onClick={() => onDelete()}
                >
                    delete
                </Button>

            </form>
        </Box>
    )
}

export default Form