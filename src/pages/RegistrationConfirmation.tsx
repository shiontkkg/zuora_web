import { Box, Button, Container, FormControl, FormLabel, IconButton, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableRow, Toolbar, Typography } from "@mui/material";
import Header from "../components/Header";
import RegistrationInfo from "../components/RegistrationInfo";
import { ArrowBack, NavigateNext } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import RegistrationStepper from "../components/RegistrationStepper";
import { ChangeEvent, useState } from "react";
import { RegistrationForm } from "../services/types";

function RegistrationConfirmation() {

    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState<RegistrationForm>(location.state ?? {
        businessForm: "",
        familyName: "",
        firstName: "",
        familyNameKana: "",
        firstNameKana: "",
        planId: "",
        planName: "",
        planPrice: 0,
        planPriceLabel: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setForm({...form, [name]: value})
    }

    // useEffect(() => {
    //     location.state && setForm(location.state);
    // }, [])

    return (
        <Box sx={{ display: 'flex', backgroundColor: 'linen', minHeight: '100vh' }} >
            <Header />

            <Container maxWidth="md">
                <Toolbar />
                <Box sx={{ my: 8, p: 4, borderRadius: 2, backgroundColor: 'white' }}>

                    {/* Stepper */}
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ width: 60 }}>
                            <IconButton
                                sx={{ border: 1 }}
                                onClick={() => navigate('/select-plan', { state: form })}
                            >
                                <ArrowBack />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <RegistrationStepper activeStep={3} />
                        </Box>
                        <Box sx={{ width: 60 }} />
                    </Box>

                    {/* タイトル */}
                    <Typography variant="h5" sx={{ mt:8, textAlign: "center" }}>
                        <b>下記内容で申し込んでよろしいですか？</b>
                    </Typography>

                    {/* コンテンツ */}
                    <Box sx={{ mx: 12, my: 4, p: 1, borderRadius: 2, display: "flex", backgroundColor: 'lavender' }}>
                        <Box sx={{ m: 1, display: "flex", flexDirection: "column", flexGrow: 2 }}>
                            <Typography variant="body2" color="error">
                                <b>便利な有償プランもおすすめです<br />
                                変更の際は「プラン変更」より変更してください</b>
                            </Typography>
                        </Box>
                        <Box sx={{ m: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                            <Button
                                size="large"
                                color="primary"
                                variant="contained"
                                onClick={() => navigate("/select-plan", { state: form })}
                            >
                                プラン変更
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ mx: 12, my: 4, p: 2, borderRadius: 2, backgroundColor: 'linen' }}>
                        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                            <b>サンプルプロダクト {form.planName}</b>
                        </Typography>
                        <Box sx={{ mx: 2, my: 2 }}>
                            <TableContainer>
                                <Table size="small">
                                    <TableBody>
                                        <TableRow >
                                            <TableCell align="left" sx={{ border: 0 }}>小計</TableCell>
                                            <TableCell align="right" sx={{ border: 0 }}>{form.planPrice.toLocaleString()}円 /年</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left" sx={{ borderBottom: 2, borderColor: "grey.300" }}>税額 (10%)</TableCell>
                                            <TableCell align="right" sx={{ borderBottom: 2, borderColor: "grey.300" }}>{Math.floor(form.planPrice * 0.1).toLocaleString()}円 /年</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left" sx={{ border: 0 }}>合計</TableCell>
                                            <TableCell align="right" sx={{ border: 0 }}><b>{Math.floor(form.planPrice * 1.1).toLocaleString()}円 /年</b></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>

                    {/* 申し込む */}
                    <Box sx={{ mt: 4, mx: 12, display: "flex", justifyContent: "center" }}>
                        <Button
                            size="large"
                            color="primary"
                            variant="contained"
                            onClick={() => navigate("/registration-completed", { state: form })}
                            endIcon={<NavigateNext />}
                            sx={{ width: 240}}
                        >
                            申し込む
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default RegistrationConfirmation;