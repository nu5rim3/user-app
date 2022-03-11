import React from 'react';
// material
import { Box, Container, Typography } from '@mui/material';
// component
import Page from '../components/Page';


const Home = () => {

    return (
        <Page title="home">
            <Container maxWidth="xl">
                <Box sx={{ width: '100%', boxShadow: 5, borderRadius: 3, my: 3, p: 5 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Hello! check your profile 👋
                    </Typography>
                </Box>
            </Container>
        </Page>
    )
}

export default Home