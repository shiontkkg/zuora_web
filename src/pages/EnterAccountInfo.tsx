import { Box, Button, Container, FormControl, FormLabel, IconButton, OutlinedInput, Toolbar, Typography } from "@mui/material";
import Header from "../components/Header";
import RegistrationInfo from "../components/RegistrationInfo";
import { ArrowBack, NavigateNext } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import RegistrationStepper from "../components/RegistrationStepper";
import { ChangeEvent, useState } from "react";
import { RegistrationForm } from "../services/types";

function EnterAccountInfo() {

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
                                onClick={() => navigate('/', { state: form })}
                            >
                                <ArrowBack />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <RegistrationStepper activeStep={1} />
                        </Box>
                        <Box sx={{ width: 60 }} />
                    </Box>

                    {/* タイトル */}
                    <Typography variant="h5" sx={{ mt:8, textAlign: "center" }}>
                        <b>アカウントの情報を登録してください</b>
                    </Typography>

                    {/* コンテンツ */}
                    <Box sx={{ mt: 6, mx: 12 }}>

                        {/* 姓名 */}
                        <Box sx={{ display: "flex" }}>
                            <FormControl sx={{ m: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                <FormLabel >姓 <span style={{ padding: 3, fontSize: 12, color: "red", backgroundColor: "pink", borderRadius: 2 }}>必須</span></FormLabel>
                                <OutlinedInput
                                    name="familyName"
                                    value={form.familyName}
                                    onChange={(e) => handleChange(e)}
                                    size="small"
                                    placeholder="山田"
                                    sx={{ mt: 1 }}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                <FormLabel>名 <span style={{ padding: 3, fontSize: 12, color: "red", backgroundColor: "pink", borderRadius: 2 }}>必須</span></FormLabel>
                                <OutlinedInput
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={(e) => handleChange(e)}
                                    size="small"
                                    placeholder="太郎"
                                    sx={{ mt: 1 }}
                                />
                            </FormControl>
                        </Box>

                        {/* セイメイ */}
                        <Box sx={{ mt: 2, display: "flex" }}>
                            <FormControl sx={{ m: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                <FormLabel >セイ <span style={{ padding: 3, fontSize: 12, color: "red", backgroundColor: "pink", borderRadius: 2 }}>必須</span></FormLabel>
                                <OutlinedInput
                                    name="familyNameKana"
                                    value={form.familyNameKana}
                                    onChange={(e) => handleChange(e)}
                                    size="small"
                                    placeholder="ヤマダ"
                                    sx={{ mt: 1 }}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                <FormLabel>名 <span style={{ padding: 3, fontSize: 12, color: "red", backgroundColor: "pink", borderRadius: 2 }}>必須</span></FormLabel>
                                <OutlinedInput
                                    name="firstNameKana"
                                    value={form.firstNameKana}
                                    onChange={(e) => handleChange(e)}
                                    size="small"
                                    placeholder="タロウ"
                                    sx={{ mt: 1 }}
                                />
                            </FormControl>
                        </Box>
                    </Box>

                    {/* 次へ */}
                    <Box sx={{ mt: 4, mx: 12, display: "flex", justifyContent: "center" }}>
                        <Button
                            size="large"
                            variant="contained"
                            onClick={() => navigate("/select-plan", { state: form })}
                            endIcon={<NavigateNext />}
                            sx={{ width: 240}}
                        >
                            次へ
                        </Button>
                    </Box>
                </Box>
            </Container>

            <RegistrationInfo selectingPlan={{
                "productName": "サンプルプロダクト",
                "planName": form.planName,
                "priceLabel": form.planPriceLabel,
            }} />
        </Box>
    );
}

export default EnterAccountInfo;