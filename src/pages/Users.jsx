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
function Users() {
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
      cell: (d) => (
        <a href="https://google.com" target="_blank" className="dlink">
          {d.director}
        </a>
      ),
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      cell: (d) => <span>{d.genres.join(", ")}</span>,
    },
    {
      name: "Last login",
      selector: "Last login",
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      selector: "null",
      cell: (d) => [
        <i
          key={d.title}
          onClick={handleClick.bind(this, d.title)}
          className="first fas fa-pen"
        >
          <EditIcon />
        </i>,
        <i
          onClick={handleClick.bind(this, d.title)}
          className="fas fa-trash-alt"
        >
          <DeleteIcon />
        </i>,
      ],
    },
  ];
  const data = [
    {
      id: 1,
      name: "Beetlejuice",
      email: "1988",
      runtime: "92",
      genres: ["Comedy", "Fantasy"],
      dlast: "Tim Burton",
      actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
      plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
    },
    {
      id: 2,
      title: "The Cotton Club",
      year: "1984",
      runtime: "127",
      genres: ["Crime", "Drama", "Music"],
      director: "Francis Ford Coppola",
      actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
      plot: "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      year: "1994",
      runtime: "142",
      genres: ["Crime", "Drama"],
      director: "Frank Darabont",
      actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
    },
    {
      id: 4,
      title: "Crocodile Dundee",
      year: "1986",
      runtime: "97",
      genres: ["Adventure", "Comedy"],
      director: "Peter Faiman",
      actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
      plot: "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
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
      <BreadCrumb Icon={HomeRoundedIcon} title={"Users"} />
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
          Users
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

export default Users;
