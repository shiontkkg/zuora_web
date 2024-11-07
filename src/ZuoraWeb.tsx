import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Box, Container, CssBaseline } from "@mui/material";
import SelectAccountType from "./pages/SelectAccountType";
import Sample from "./pages/Sample";
import EnterAccountInfo from "./pages/EnterAccountInfo";
import SelectPlan from "./pages/SelectPlan";
import RegistrationConfirmation from "./pages/RegistrationConfirmation";
import RegistrationCompleted from "./pages/RegistrationCompleted";

function ZuoraWeb() {

    return (
        <>
            <BrowserRouter>
                <CssBaseline />
                <Box>
                    <Routes>
                        <Route path="/zuora_web/" element={<SelectAccountType />} />
                        <Route path="/zuora_web/enter-account-info" element={<EnterAccountInfo />} />
                        <Route path="/zuora_web/select-plan" element={<SelectPlan />} />
                        <Route path="/zuora_web/registration-confirmation" element={<RegistrationConfirmation />} />
                        <Route path="/zuora_web/registration-completed" element={<RegistrationCompleted />} />
                        
                        <Route path="/zuora_web/sample" element={<Sample />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </>
    );
}

export default ZuoraWeb;