import { Box, Step, StepLabel, Stepper } from "@mui/material";

const steps = [
    "STEP 1\n事業形態の選択",
    "STEP 2\nアカウント情報の入力",
    "STEP 3\nプランの選択",
    "STEP 4\nお支払方法の登録",
    "STEP 5\n登録完了"
]

type RegistrationStepperProps = {
    activeStep: number
}

function RegistrationStepper({ activeStep }: RegistrationStepperProps) {
    return (
        <>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel sx={{ whiteSpace: "pre-wrap" }}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </>
    );
}

export default RegistrationStepper;