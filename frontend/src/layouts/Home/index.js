import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
// component
import Navbar from '../../components/Navbar';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
    minHeight: '100%',
    overflow: 'hidden',
});

const MainStyle = styled('div')(() => ({
    // flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: 10,
}));

// ----------------------------------------------------------------------

const HomeLayout = () => {

    return (
        <RootStyle>
            <Navbar />
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}

export default HomeLayout;