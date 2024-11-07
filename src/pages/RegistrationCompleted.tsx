import { Box, Button, Container, FormControl, FormLabel, IconButton, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableRow, Toolbar, Typography } from "@mui/material";
import Header from "../components/Header";
import RegistrationInfo from "../components/RegistrationInfo";
import { ArrowBack, NavigateNext } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import RegistrationStepper from "../components/RegistrationStepper";
import { ChangeEvent, useState } from "react";
import { RegistrationForm } from "../services/types";
import image from "../assets/figure_goodjob.png";
import picture from "../assets/yamakawa.webp"

function RegistrationCompleted() {

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

                    {/* アイコン */}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img src={image} alt="image" style={{ width: 200 }} />
                    </Box>

                    {/* タイトル */}
                    <Typography variant="h5" sx={{ mt:8, textAlign: "center" }}>
                        <b>お申し込みいただきありがとうございます！</b>
                    </Typography>

                    {/* 最初に戻る */}
                    <Box sx={{ mt: 4, mx: 12, display: "flex", justifyContent: "center" }}>
                        <Button
                            size="large"
                            color="primary"
                            variant="contained"
                            onClick={() => navigate("/")}
                            sx={{ width: 300 }}
                        >
                            最初に戻る
                        </Button>
                    </Box>
                    <Box sx={{ mt: 2, mx: 12, display: "flex", justifyContent: "center" }}>
                        <Button
                            size="large"
                            color="primary"
                            variant="contained"
                            onClick={() => navigate("/", { state: form })}
                            sx={{ width: 300 }}
                        >
                            入力内容を保持して最初に戻る
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default RegistrationCompleted;