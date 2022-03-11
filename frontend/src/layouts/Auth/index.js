import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
    overflow: 'hidden',
});

const MainStyle = styled('div')(() => ({
    overflow: 'auto',
    margin: 'auto',
}));

// ----------------------------------------------------------------------

const AuthLayout = () => {

    return (
        <RootStyle>
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}

export default AuthLayout;