import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import GridViewIcon from '@mui/icons-material/GridView';
import Person3Icon from '@mui/icons-material/Person3';
import ColorSchemeToggle from "./ColorSchemeToggle";
import { closeSidebar } from "../../utils";
import { useNavigate } from "react-router-dom";
import QueueIcon from '@mui/icons-material/Queue';
import MarginIcon from '@mui/icons-material/Margin';
import BadgeIcon from '@mui/icons-material/Badge';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCardIcon from '@mui/icons-material/AddCard';
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
function Toggler({ defaultExpanded = false, renderToggle, children }) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}

const Item = ({ title, to, Icon, selected, setSelected, onClick }) => {
  const Navigate = useNavigate();
  return (
    <ListItem>
      <ListItemButton
        selected={selected === title}
        onClick={() => Navigate(to)}
      >
        <Icon />
        <ListItemContent onClick={() => setSelected(title)}>
          <Typography level="title-sm">{title}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};
export default function Sidebar() {
  const [selected, setSelected] = React.useState("dashboard");
  const Navigate = useNavigate();
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <IconButton variant="soft" color="primary" size="sm">
          <BrightnessAutoRoundedIcon />
        </IconButton>
        {/* <Typography level="title-lg">Acme Co.</Typography> */}
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>
      <Input
        size="sm"
        startDecorator={<SearchRoundedIcon />}
        placeholder="Search"
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <Item
            title="OverView"
            to="/dashboard"
            Icon={GridViewIcon}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Categories"
            to="/dashboard/categories"
            Icon={DashboardRoundedIcon}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Users"
            to="/dashboard/users"
            Icon={Person3Icon}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Listings"
            to="/dashboard/listings"
            Icon={QueueIcon}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Bookings"
            to="/dashboard/bookings"
            Icon={MarginIcon}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="User Verifications"
            to="/dashboard/userverifications"
            Icon={BadgeIcon}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Push Notification"
            to="/dashboard/pushnotifications"
            Icon={AlarmOnIcon}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Admin Notifications"
            to="/dashboard/adminnotifications"
            Icon={NotificationsNoneIcon}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Payments"
            to="/dashboard/payments"
            Icon={AddCardIcon}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Users taxes"
            to="/dashboard/usertaxes"
            Icon={FormatAlignCenterIcon}
            selected={selected}
            setSelected={setSelected}
          />

          {/* <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <AssignmentRoundedIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Tasks</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={{ transform: open ? "rotate(180deg)" : "none" }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton>All tasks</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Backlog</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>In progress</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Done</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem> */}

          {/* <ListItem>
            <ListItemButton
              role="menuitem"
              component="a"
              href="/joy-ui/getting-started/templates/messages/"
            >
              <QuestionAnswerRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Messages</Typography>
              </ListItemContent>
              <Chip size="sm" color="primary" variant="solid">
                4
              </Chip>
            </ListItemButton>
          </ListItem> */}
        </List>

        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Settings
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ mt: 2 }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar
          variant="outlined"
          color="primary"
          src="/static/images/avatar/3.jpg"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm" noWrap>
            Emmanuel
          </Typography>
          <Typography level="body-xs" noWrap>
            @emmanuel
          </Typography>
        </Box>
        <IconButton
          variant="outlined"
          color="neutral"
          size="sm"
          onClick={() => alert("Log out!")}
        >
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}
