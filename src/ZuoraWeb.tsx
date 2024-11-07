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
            <BrowserRouter basename="/zuora_web">
                <CssBaseline />
                <Box>
                    <Routes>
                        <Route path="/" element={<SelectAccountType />} />
                        <Route path="/enter-account-info" element={<EnterAccountInfo />} />
                        <Route path="/select-plan" element={<SelectPlan />} />
                        <Route path="/registration-confirmation" element={<RegistrationConfirmation />} />
                        <Route path="/registration-completed" element={<RegistrationCompleted />} />
                        
                        <Route path="/sample" element={<Sample />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </>
    );
}

export default ZuoraWeb;