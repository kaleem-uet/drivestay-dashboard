import BreadCrumb from "../comp/global/BreadCrumb";
import { useNavigate } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Box, Button, Input, Typography, FormControl, FormLabel, Grid } from "@mui/joy";
import { useState } from "react";

const AddCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
  const [status, setStatus] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      // Handle category addition logic here
      setCategoryName("");
      setDescription("");
      setCategoryCode("");
      setStatus("");
      setCreatedDate("");
    }
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
      <BreadCrumb Icon={HomeRoundedIcon} title={'Add Category'} />
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
          Add Categories
        </Typography>
        <Button
          color="primary"
          size="sm"
          onClick={() => navigate(-1)}
          sx={{ mt: { xs: 2, sm: 0 } }}
        >
          All Categories
        </Button>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: { xs: "100%", sm: 600 },
          width: "100%",
          margin: "0 auto",
          padding: { xs: 2, sm: 3 },
          boxShadow: "var(--joy-shadow-sm)",
          borderRadius: "var(--joy-radius-md)",
        //   backgroundColor: "var(--joy-palette-background-level1)",
        }}
      >
        <Typography level="h4" fontWeight="lg" textAlign="center" mb={3}>
          Add New Category
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel>Category Name</FormLabel>
              <Input
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel>Category Code</FormLabel>
              <Input
                placeholder="Enter category code"
                value={categoryCode}
                onChange={(e) => setCategoryCode(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={4}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel>Status</FormLabel>
              <Input
                placeholder="Enter status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel>Created Date</FormLabel>
              <Input
                type="date"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Button type="submit" color="primary" variant="solid" sx={{ mt: 3 }}>
          Add Category
        </Button>
      </Box>
    </Box>
  );
};

export default AddCategories;
