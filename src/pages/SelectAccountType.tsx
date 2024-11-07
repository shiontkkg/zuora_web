import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Toolbar, Typography } from "@mui/material";
import Header from "../components/Header";
import RegistrationInfo from "../components/RegistrationInfo";
import { NavigateNext } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import RegistrationStepper from "../components/RegistrationStepper";
import { ChangeEvent, useState } from "react";
import { RegistrationForm } from "../services/types";

function SelectAccountType() {

    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState<RegistrationForm>(location.state ?? {
        businessForm: "",
        familyName: "",
        firstName: "",
        familyNameKana: "",
        firstNameKana: "",
        planId: "",
        planName: "無料体験プラン",
        planPrice: 0,
        planPriceLabel: "無料",
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
                        <Box sx={{ width: 60 }} />
                        <Box sx={{ flexGrow: 1 }}>
                            <RegistrationStepper activeStep={0} />
                        </Box>
                        <Box sx={{ width: 60 }} />
                    </Box>

                    {/* タイトル */}
                    <Typography variant="h5" sx={{ mt:8, textAlign: "center" }}>
                        <b>事業形態を選択してください</b>
                    </Typography>

                    {/* コンテンツ */}
                    <Box sx={{ mt: 6, mx: 12 }}>
                        <FormControl fullWidth>
                            <FormLabel>
                                事業形態 <span style={{ padding: 3, fontSize: 12, color: "red", backgroundColor: "pink", borderRadius: 2 }}>必須</span>
                            </FormLabel>
                            <RadioGroup
                                row
                                name="businessForm"
                                value={form.businessForm}
                                onChange={(e) => handleChange(e)}
                            >
                                <FormControlLabel
                                    value="companyOwner"
                                    control={<Radio />}
                                    label="法人　　　"
                                    sx={{ m: 1, flexGrow: 1, border: 1, borderColor: "lightgray", borderRadius: 2 }}
                                />
                                <FormControlLabel
                                    value="soleProprietorship"
                                    control={<Radio />}
                                    label="個人事業主"
                                    sx={{ m: 1, flexGrow: 1, border: 1, borderColor: "lightgray", borderRadius: 2 }}
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    {/* 次へ */}
                    <Box sx={{ mt: 4, mx: 12, display: "flex", justifyContent: "center" }}>
                        <Button
                            size="large"
                            variant="contained"
                            onClick={() => navigate("/enter-account-info", { state: form })}
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

export default SelectAccountType;