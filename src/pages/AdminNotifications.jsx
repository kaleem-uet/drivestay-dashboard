// export default AdminNotifications;
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button"; // Add this import for Button
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BreadCrumb from "../comp/global/BreadCrumb";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import SortIcon from "@mui/icons-material/ArrowDownward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import { Modal, ModalDialog } from "@mui/joy";

function AdminNotifications() {
  const handleClick = (title) => {
    console.log(`You clicked me! ${title}`);
  };

  const [open, setOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleOpenModal = (notification) => {
    console.log(notification);

    setSelectedNotification(notification);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedNotification(null);
  };
  const handleView = (notification) => {
    navigate("/notification-detail", { state: notification });
  };
  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Notification",
      selector: "notification",
      sortable: true,
    },
    {
      name: "Created at",
      selector: "createdat",
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      selector: "null",
      cell: (d) => [
        <RemoveRedEyeIcon
          sx={{ marginRight: "6px", color: "lightblue" }}
          onClick={() => handleOpenModal(d)}
        />,
        <EditIcon
          sx={{ marginRight: "6px" }}
          onClick={handleClick.bind(this, d.title)}
        />,
        <DeleteIcon
          sx={{ color: "red" }}
          onClick={handleClick.bind(this, d.title)}
        />,
      ],
    },
  ];

  const data = [
    {
      id: "1",
      title: "Booking Done",
      notification: "John booking done",
      createdat: "22/08/2024",
    },
    {
      id: "2",
      title: "Payment Required",
      notification: "Payment Required from PayPal",
      createdat: "20/08/2024",
    },
    {
      id: "3",
      title: "Reached Limit",
      notification: "John Limit exceeded",
      createdat: "18/08/2024",
    },
  ];

  const navigate = useNavigate();
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
        height: "100dvh",
        gap: 1,
      }}
    >
      <BreadCrumb Icon={HomeRoundedIcon} title={"Admin Notifications"} />
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Admin Notifications
        </Typography>
      </Box>
      <DataTableExtensions data={data} columns={columns}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          sortIcon={<SortIcon />}
          defaultSortAsc={true}
          pagination
          highlightOnHover
          dense
        />
      </DataTableExtensions>
      {/* Modal for Viewing Notification Details */}
      {/* <Modal>
        <ModalDialog>
          {selectedNotification && (
            <Box>
              <Typography level="h6" sx={{ mb: 1 }}>
                {selectedNotification?.title}
              </Typography>
              <Typography level="body2" sx={{ mb: 2 }}>
                {selectedNotification.notification}
              </Typography>
              <Typography level="body1">
                {selectedNotification.createdat}
              </Typography>
              <Button onClick={handleCloseModal} sx={{ mt: 2 }}>
                Close
              </Button>
            </Box>
          )}
        </ModalDialog>
      </Modal> */}
      <Modal open={open} onClose={handleCloseModal}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only("xs")]: {
              top: "unset",
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: "none",
              maxWidth: "unset",
            },
          })}
        >
          <Typography id="nested-modal-title" level="h2">
            {selectedNotification?.title}
          </Typography>
          <Typography id="nested-modal-title" level="h2">
            {selectedNotification?.createdat}
          </Typography>

          <Typography id="nested-modal-description" textColor="text.tertiary">
            {selectedNotification?.notification}
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              gap: 1,
              flexDirection: { xs: "column", sm: "row-reverse" },
            }}
          >
            <Button
              variant="solid"
              color="primary"
              onClick={() => setOpen(false)}
            >
              Continue
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </Box>
  );
}

export default AdminNotifications;
