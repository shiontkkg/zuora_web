import { AppBar, Box, Toolbar, Typography } from "@mui/material";



function Header() {

    return (
        <>
            <AppBar position="fixed" color="default" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6">サンプルプロダクト</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;