import { Box, Radio, Sheet } from "@mui/joy";
import { PlanInfo } from "../services/types";
import { Typography } from "@mui/material";

type PlanPanelProps = {
    plan: PlanInfo
}

function PlanPanel({ plan }: PlanPanelProps) {

    return (
        <>
            <Sheet
                component="label"
                key={plan.planId}
                variant="outlined"
                sx={{
                    width: 1,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    boxShadow: "sm",
                    borderRadius: "md"
                }}
            >
                <Radio
                    label={(
                        <>
                            <Box>
                                <Typography variant="body1">
                                    <b>サンプルプロダクト</b>
                                </Typography>
                                <Typography variant="body1">
                                    <b>{plan.planName}</b>
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="body2">
                                    <b>{plan.priceDescription}</b>
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="caption" sx={{ whiteSpace: "pre-wrap" }}>
                                    {plan.planDescription}
                                </Typography>
                            </Box>
                        </>
                    )}
                    value={plan.planId}
                    overlay
                    disableIcon
                    slotProps={{
                        label: ({ checked }) => ({
                            sx: {
                                color: checked ? "text.primary" : "text.secondary",
                            }
                        }),
                        action: ({ checked }) => ({
                            sx: (theme) => ({
                                ...(checked && {
                                    '--variant-borderWidth': '4px',
                                    '&&': {
                                        borderColor: theme.vars.palette.primary[500]
                                    }
                                })
                            })
                        })
                    }}
                />
            </Sheet>
        </>
    );
}

export default PlanPanel;