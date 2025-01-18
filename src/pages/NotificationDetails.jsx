import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, Divider, Sheet } from "@mui/joy";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BreadCrumb from "../comp/global/BreadCrumb";

const NotificationDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fallback in case location.state is undefined
  const { id, title, notification, createdat } = location.state || {};
  console.log(id, title, notification, createdat);

  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: { xs: 2, md: 3 },
        pb: { xs: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "background.body",
      }}
    >
      <BreadCrumb Icon={HomeRoundedIcon} title={"Payment Detail"} />
      {/* Breadcrumb */}
      {/* <BreadCrumb
        items={[
          { icon: <HomeRoundedIcon />, label: "Dashboard", to: "/dashboard" },
          { label: "Notifications", to: "/dashboard/notifications" },
          { label: `Notification #${id}` },
        ]}
      /> */}

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography level="h4" component="h1">
          Notification Details
        </Typography>
        <Button
          variant="outlined"
          startDecorator={<ArrowBackIosNewIcon />}
          onClick={() => navigate(-1)}
        >
          Back to Notifications
        </Button>
      </Box>

      {/* Notification Card */}
      <Card
        variant="outlined"
        sx={{
          maxWidth: 800,
          width: "100%",
          mx: "auto",
          p: 3,
          boxShadow: "sm",
        }}
      >
        <Typography level="h5" component="h2" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography level="body1" sx={{ mb: 2 }}>
          {notification}
        </Typography>
        <Typography level="body2" color="neutral">
          Created At: {createdat}
        </Typography>
      </Card>
    </Box>
  );
};

export default NotificationDetail;
