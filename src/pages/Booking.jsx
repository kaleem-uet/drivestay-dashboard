import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BreadCrumb from "../comp/global/BreadCrumb";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import SortIcon from "@mui/icons-material/ArrowDownward";

function Booking() {

  const handleClick = (title) => {
    console.log(`You clicked me! ${title}`);
  };

  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
    },
    {
      name: "Listing Name",
      selector: "listingname",
      sortable: true,
    },
    {
      name: "Host/Guest Name",
      selector: "host_guest",
      sortable: true,
    },
    {
      name: "Time/Date",
      selector: "time_date",
      sortable: true,
    },
    {
      name: "Booking Duration",
      selector: "bookingduration",
      sortable: true,
    },
    {
      name: "Address",
      selector: "adress",
      sortable: true,
    },
    // Uncomment if needed
    // {
    //   name: "Action",
    //   sortable: false,
    //   selector: "null",
    //   cell: (d) => [
    //     <EditIcon onClick={handleClick.bind(this, d.title)} />,
    //     <DeleteIcon onClick={handleClick.bind(this, d.title)} />,
    //   ],
    // },
  ];

  const data = [
    {
      id: 1,
      listingname: "Beetlejuice",
      host_guest: "dee",
      time_date: "2024",
      bookingduration: "2 months",
      adress: "UAE",
    },
    {
      id: 2,
      listingname: "Beetlejuice",
      host_guest: "dee",
      time_date: "2024",
      bookingduration: "2 months",
      adress: "UAE",
    },
    {
      id: 3,
      listingname: "Beetlejuice",
      host_guest: "dee",
      time_date: "2024",
      bookingduration: "2 months",
      adress: "UAE",
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
      <BreadCrumb Icon={HomeRoundedIcon} title={"Booking"} />
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
           Booking
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
    </Box>
  );
}

export default Booking;
