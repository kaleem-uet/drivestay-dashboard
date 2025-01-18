import React from 'react';
import { Box, Typography, Input, RadioGroup, Radio, FormControl, FormLabel, Checkbox, Button, Card, Divider, Switch, Select, Option } from '@mui/joy';
import BreadCrumb from "../comp/global/BreadCrumb";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from 'react-router-dom';

const PaymentDetails = () => {
    const navigate = useNavigate();

    const handleSwitchChange = (event) => {
        // Handle enabling/disabling withdrawals
    };

    const handleEditWithdrawal = () => {
        // Handle editing withdrawal options
    };

    const handleEditWithdrawalLimits = () => {
        // Handle editing withdrawal limits
    };

    const handleEditHostPercentage = () => {
        // Handle editing host percentage
    };

    const handleAddCancellationFee = () => {
        // Handle adding cancellation fee
    };

    const handleManualCharge = () => {
        // Handle manually charging the host payout method
    };

    const handleViewPayoutInfo = () => {
        // Handle viewing payout information from the host
    };

    return (
        <Box
            component="main"
            className="MainContent"
            sx={{
                px: { xs: 2, md: 6 },
                pt: {
                    xs: "calc(12px + var(--Header-height))",
                    sm: "calc(12px + var(--Header-height))",
                    md: 3,
                },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                gap: 3,
            }}
        >
            <BreadCrumb Icon={HomeRoundedIcon} title={'Payment Detail'} />
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "space-between",
                    mb: 2,
                }}
            >
                <Typography level="h2" component="h1">
                    Payment Detail
                </Typography>
                <Button
                    color="primary"
                    size="sm"
                    onClick={() => navigate(-1)}
                    sx={{ mt: { xs: 2, sm: 0 } }}
                >
                    All Payments
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, p: 2 }}>
                {/* Payment Form Section */}
                <Box sx={{ flex: 2 }}>
                    <Typography level="h6" sx={{ mb: 1 }}>Diabetes Pump & Supplies</Typography>
                    <Typography level="body2" color="neutral" sx={{ mb: 1 }}>
                        Insurance Responsibility 81.73%
                    </Typography>
                    <Typography level="body1" sx={{ mb: 2 }}>
                        Enter insurance details and all necessary documents will be submitted on your behalf for the remaining balance.
                    </Typography>

                    <Input
                        placeholder="Insurance Card Number"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    <Input
                        placeholder="Enter Zip Code"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    <Typography level="body1" sx={{ mb: 2 }}>
                        Patient Owes: $112.34
                    </Typography>

                    <FormControl sx={{ mb: 2 }}>
                        <FormLabel>Payment Method</FormLabel>
                        <RadioGroup>
                            <Radio value="insurance" label="Use Insurance Card" />
                            <Radio value="office" label="Maintenance Office" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl sx={{ mb: 2 }}>
                        <Checkbox label="Authorize payments" />
                    </FormControl>

                    <Button variant="solid" color="primary" fullWidth>
                        Proceed to Payment
                    </Button>
                </Box>

                {/* Order Recap Section */}
                <Box sx={{ flex: 1 }}>
                    <Card variant="outlined">
                        <Typography level="h6" sx={{ mb: 1 }}>Order Recap</Typography>
                        <Divider sx={{ mb: 2 }} />

                        <Typography level="body2">Contracted Rate: $365.00</Typography>
                        <Typography level="body2">Insurance Responsibility: - $203.00</Typography>
                        <Typography level="body2">Patient Owes: $112.34</Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography level="body2" color="neutral">
                            Insurance Responsibility: 81.73%
                        </Typography>
                    </Card>
                </Box>
            </Box>

            {/* Additional Features Section */}
            <Box sx={{ mt: 4 }}>
                <Typography level="h5" sx={{ mb: 2 }}>Manage Withdrawal Settings</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>Enable Withdrawals</Typography>
                        <Switch onChange={handleSwitchChange} />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>Edit Withdrawal Options</Typography>
                        <Button variant="outlined" onClick={handleEditWithdrawal}>
                            Edit
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>Edit Withdrawal Limits</Typography>
                        <Button variant="outlined" onClick={handleEditWithdrawalLimits}>
                            Edit
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>Edit Host Percentage</Typography>
                        <Button variant="outlined" onClick={handleEditHostPercentage}>
                            Edit
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>Add Cancellation Fee</Typography>
                        <Button variant="outlined" onClick={handleAddCancellationFee}>
                            Add
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>Manually Charge Host</Typography>
                        <Button variant="outlined" onClick={handleManualCharge}>
                            Charge
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>View Payout Information</Typography>
                        <Button variant="outlined" onClick={handleViewPayoutInfo}>
                            View
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PaymentDetails;
