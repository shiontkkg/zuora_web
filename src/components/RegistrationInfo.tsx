import { Box, Drawer, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;

export type SelectingPlan = {
    productName: string,
    planName: string,
    priceLabel: string
}

type RegistrationInfoProps = {
    selectingPlan: SelectingPlan
}

function RegistrationInfo({ selectingPlan }: RegistrationInfoProps) {

    return (
        <>
            <Drawer
                variant="permanent"
                anchor="right"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar /> {/* これがないとヘッダーの下に潜り込んでしまう */}
                <Box sx={{ mt: 3, mx: 3 }}>
                    <Typography>選択中のサービス</Typography>
                    <Typography sx={{ mt: 1 }}><b>{selectingPlan.productName}</b></Typography>
                </Box>
                <Box sx={{ mt: 3, mx: 3 }}>
                    <Typography>プラン</Typography>
                    <Typography sx={{ mt: 1 }}><b>{selectingPlan.planName}</b></Typography>
                </Box>
                <Box sx={{ mt: 3, mx: 3 }}>
                    <Typography>利用料金</Typography>
                    <Typography sx={{ mt: 1 }}><b>{selectingPlan.priceLabel}</b></Typography>
                </Box>
            </Drawer>

        </>
    );
}

export default RegistrationInfo;