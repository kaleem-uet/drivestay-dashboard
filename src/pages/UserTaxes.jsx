// export default UserTaxes;
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BreadCrumb from "../comp/global/BreadCrumb";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import SortIcon from "@mui/icons-material/ArrowDownward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

function UserTaxes() {

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
      name: "Name",
      selector: "name",
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
        <EditIcon sx={{marginRight:'6px'}} onClick={handleClick.bind(this, d.title)} />,
        <DeleteIcon sx={{color:'red'}} onClick={handleClick.bind(this, d.title)} />,
      ],
    },
  ];

  const data = [
    {
      id: "1",
      name: "User name",
      createdat: "22/08/2024",
    },
    {
      id: "2",
      name: "haaris",
      createdat: "20/08/2024",
    },
    {
      id: "3",
      name: "jhon",
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
      <BreadCrumb Icon={HomeRoundedIcon} title={"UserTaxes"} />
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
          UserTaxes
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

export default UserTaxes;
