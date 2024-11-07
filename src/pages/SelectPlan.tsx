import { Box, Button, Container, Grow, IconButton, Toolbar, Typography } from "@mui/material";
import Header from "../components/Header";
import RegistrationInfo from "../components/RegistrationInfo";
import { ArrowBack, NavigateNext } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import RegistrationStepper from "../components/RegistrationStepper";
import { ChangeEvent, useState } from "react";
import { PlanInfo, RegistrationForm } from "../services/types";
import { FormControl, RadioGroup } from "@mui/joy";
import PlanPanel from "../components/PlanPanel";

const plans: PlanInfo[] = [
    {
        planId: "plan1",
        planName: "無料体験プラン",
        price: 0,
        priceLabel: "無料",
        priceDescription: "最大2か月無料",
        planDescription: "決算書作成機能は利用できません。",
    },
    {
        planId: "plan2",
        planName: "セルフプラン",
        price: 27800,
        priceLabel: "27,800円/年（税抜）",
        priceDescription: "年額：27,800円（税抜）",
        planDescription: "すべての機能が利用できます。\n初期最大2か月のサポート対応。",
    },
    {
        planId: "plan3",
        planName: "ベーシックプラン",
        price: 37600,
        priceLabel: "37,600円/年（税抜）",
        priceDescription: "年額：37,600円（税抜）",
        planDescription: "すべての機能が利用できます。\n通年サポート対応。",
    },
]

function SelectPlan() {

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
        // サイドメニューを更新する
        const { value } = event.target;
        const selectedPlan = plans.find((plan) => plan.planId === value);
        setForm({...form,
            "planId": value,
            "planName": selectedPlan?.planName ?? "",
            "planPrice": selectedPlan?.price ?? 0,
            "planPriceLabel": selectedPlan?.priceLabel ?? ""
        });
    }

    const [checked, setChecked] = useState(true);

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
                                onClick={() => navigate('/enter-account-info', { state: form })}
                            >
                                <ArrowBack />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <RegistrationStepper activeStep={2} />
                        </Box>
                        <Box sx={{ width: 60 }} />
                    </Box>

                    {/* タイトル */}
                    <Typography variant="h5" sx={{ mt:8, textAlign: "center" }}>
                        <b>プランを選択してください</b>
                    </Typography>

                    {/* コンテンツ（他のページよりも幅を大きくしている） */}
                    <Box sx={{ mt: 6, mx: 3 }}>
                        <FormControl>
                            <RadioGroup
                                orientation="horizontal"
                                name="planId"
                                value={form.planId}
                                onChange={(e) => handleChange(e)}
                                sx={{ gap: 2 }}
                            >
                                {plans.map((plan) => (
                                    <PlanPanel plan={plan} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    {/* 次へ */}
                    <Box sx={{ mt: 4, mx: 12, display: "flex", justifyContent: "center" }}>
                        <Button
                            size="large"
                            variant="contained"
                            onClick={() => navigate("/registration-confirmation", { state: form })}
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

export default SelectPlan;