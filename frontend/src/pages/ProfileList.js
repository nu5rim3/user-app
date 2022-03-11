import React, { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// component
import Page from '../components/Page';
import Form from '../components/Form';

import axios from 'axios';

import { Link } from 'react-router-dom';

const ProfileList = () => {

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        getAllUser()
    }, []);

    const getAllUser = async () => {

        const config = {
            headers: {
                Authorization: localStorage.getItem("Authorization"),
            },
        };

        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/getallusers`, config)
            .then((res) => {
                setDataList(res.data.data)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }



    return (
        <Page title="Profile List">
            <Container maxWidth="sm">
                <Box sx={{ my: 3 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Profile List
                    </Typography>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Check and update
                    </Typography>
                    {dataList.map((item) => 
                        <Form key={item._id} item={item} getAllUser={getAllUser} />
                    )}
                </Box>
            </Container>
        </Page>
    )
}

export default ProfileList;