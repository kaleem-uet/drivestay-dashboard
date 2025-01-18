import { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BlockIcon from "@mui/icons-material/Block";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const rows = [
  {
    id: "012",
    name: "stokes",
    createdat: "13/08/2024",
  },
  {
    id: "013",
    name: "haaris",
    createdat: "16/08/2024",
  },
  {
    id: "014",
    name: "jhon",
    createdat: "18/08/2024",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const handleEdit = (id) => {
  console.log("Edit row with id:", id);
  // Implement edit logic here
};

const handleDelete = (id) => {
  console.log("Delete row with id:", id);
  // Implement delete logic here
};

// function RowMenu() {
//   return (
//     <Dropdown>
//       <MenuButton
//         slots={{ root: IconButton }}
//         slotProps={{ root: { variant: "plain", color: "neutral", size: "sm" } }}
//       >
//         <MoreHorizRoundedIcon />
//       </MenuButton>
//       <Menu size="sm" sx={{ minWidth: 140 }}>
//         <MenuItem>Edit</MenuItem>
//         <MenuItem>Rename</MenuItem>
//         <MenuItem>Move</MenuItem>
//         <Divider />
//         <MenuItem color="danger">Delete</MenuItem>
//       </Menu>
//     </Dropdown>
//   );
// }

export default function OrderTable() {
  const [order, setOrder] = useState("desc");
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const renderFilters = () => (
    <>
      {/* <FormControl size="sm">
        <FormLabel>Status</FormLabel>
        <Select
          size="sm"
          placeholder="Filter by status"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="paid">Paid</Option>
          <Option value="pending">Pending</Option>
          <Option value="refunded">Refunded</Option>
          <Option value="cancelled">Cancelled</Option>
        </Select>
      </FormControl> */}
      {/* <FormControl size="sm">
        <FormLabel>Category</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="refund">Refund</Option>
          <Option value="purchase">Purchase</Option>
          <Option value="debit">Debit</Option>
        </Select>
      </FormControl> */}
      {/* <FormControl size="sm">
        <FormLabel>Customer</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="olivia">Olivia Rhye</Option>
          <Option value="steve">Steve Hampton</Option>
          <Option value="ciaran">Ciaran Murray</Option>
          <Option value="marina">Marina Macdonald</Option>
          <Option value="charles">Charles Fulton</Option>
          <Option value="jay">Jay Hooper</Option>
        </Select>
      </FormControl> */}
    </>
  );

  return (
    <>
      {/* <Sheet
        className="SearchAndFilters-mobile"
        sx={{
          display: { xs: "flex", sm: "none" },
          my: 1,
          gap: 1,
        }}
      > */}
        {/* <Input
          size="sm"
          placeholder="Search"
          startDecorator={<SearchIcon />}
          sx={{ flexGrow: 1 }}
        /> */}
        {/* <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <FilterAltIcon />
        </IconButton>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
            <ModalClose />
            <Typography id="filter-modal" level="h2">
              Filters
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {renderFilters()}
              <Button color="primary" onClick={() => setOpen(false)}>
                Submit
              </Button>
            </Sheet>
          </ModalDialog>
        </Modal>
      </Sheet>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: { xs: "none", sm: "flex" },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: { xs: "120px", md: "160px" },
          },
        }}
      >
        {/* <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search for order</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
          />
        </FormControl> */}
        {/* {renderFilters()} */} 
      {/* </Box> */}
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: "none", sm: "initial" },
          width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        <Table
  aria-labelledby="tableTitle"
  stickyHeader
  hoverRow
  sx={{
    "--TableCell-headBackground": "var(--joy-palette-background-level1)",
    "--Table-headerUnderlineThickness": "1px",
    "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
    "--TableCell-paddingY": "4px",
    "--TableCell-paddingX": "8px",
  }}
>
  <thead>
    <tr>
      <th style={{ width: 48, textAlign: "center", padding: "12px 6px" }}>
        <Checkbox
          size="sm"
          indeterminate={
            selected.length > 0 && selected.length !== rows.length
          }
          checked={selected.length === rows.length}
          onChange={(event) => {
            setSelected(
              event.target.checked ? rows.map((row) => row.id) : []
            );
          }}
          color={
            selected.length > 0 || selected.length === rows.length
              ? "primary"
              : undefined
          }
          sx={{ verticalAlign: "text-bottom" }}
        />
      </th>
      <th style={{ width: 120, padding: "12px 6px" }}>
        <Link
          underline="none"
          color="primary"
          component="button"
          onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
          fontWeight="lg"
          endDecorator={<ArrowDropDownIcon />}
          sx={{
            "& svg": {
              transition: "0.2s",
              transform:
                order === "desc" ? "rotate(0deg)" : "rotate(180deg)",
            },
          }}
        >
          Id
        </Link>
      </th>
      <th style={{ width: 120, padding: "12px 6px" }}>Name</th>
      <th style={{ width: 200, padding: "12px 6px" }}>Created at</th>
      <th style={{ width: 120, padding: "12px 6px" }}>Actions</th>
      <th style={{ width: 50, padding: "12px 6px" }} />
    </tr>
  </thead>
  <tbody>
    {stableSort(rows, getComparator(order, "id")).map((row) => (
      <tr key={row.id}>
        <td style={{ textAlign: "center" }}>
          <Checkbox
            size="sm"
            checked={selected.indexOf(row.id) !== -1}
            onChange={(event) => {
              if (event.target.checked) {
                setSelected((prevSelected) => [
                  ...prevSelected,
                  row.id,
                ]);
              } else {
                setSelected((prevSelected) =>
                  prevSelected.filter((id) => id !== row.id)
                );
              }
            }}
            color={
              selected.indexOf(row.id) !== -1 ? "primary" : undefined
            }
            sx={{ verticalAlign: "text-bottom" }}
          />
        </td>
        <td>
          <Typography fontWeight="md">{row.id}</Typography>
        </td>
        <td>
          <Typography>{row.name}</Typography>
        </td>
        <td>
          <Typography>{row.createdat}</Typography>
        </td>
        <td>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              size="sm"
              variant="outlined"
              color="primary"
              onClick={() => handleEdit(row.id)}
            >
              Edit
            </Button>
            <Button
              size="sm"
              variant="outlined"
              color="danger"
              onClick={() => handleDelete(row.id)}
            >
              Delete
            </Button>
          </Box>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
      </Sheet>
      {/* <Box
        className="Pagination-mobile"
        sx={{
          display: { xs: "initial", sm: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          my: 1,
        }}
      >
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          disabled
          sx={{ visibility: "hidden" }}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography level="body2" textAlign="center" sx={{ flex: 1 }}>
          Page 1 of 10
        </Typography>
        <IconButton size="sm" variant="outlined" color="neutral">
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
      <Box
        className="Pagination-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: 1.5,
          justifyContent: "flex-end",
        }}
      >
        <Button
          size="sm"
          variant="plain"
          color="neutral"
          startDecorator={<BlockIcon />}
        >
          Clear all
        </Button>
        <Divider orientation="vertical" />
        <Typography
          level="body2"
          textAlign="center"
          sx={{ minWidth: 80, flex: 1 }}
        >
          1-12 of 100
        </Typography>
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </Box> */}
    </>
  );
}
