import React from "react";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ViewListIcon from "@mui/icons-material/ViewList";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function MyList() {
  const navigate = useNavigate();
  const [openAdmin, setOpenAdmin] = React.useState(false);
  const [openMaster, setOpenMaster] = React.useState(false);
  const [openContract, setOpenContract] = React.useState(false);
  const [openInven, setOpenInven] = React.useState(false);
  const [openInvo, setOpenInvo] = React.useState(false);

  const handleAdmin = () => {
    setOpenAdmin(!openAdmin);
  };
  const handleMaster = () => {
    setOpenMaster(!openMaster);
  };
  const handleContract = () => {
    setOpenContract(!openContract);
  };
  const handleInven = () => {
    setOpenInven(!openInven);
  };
  const handleInvo = () => {
    setOpenInvo(!openInvo);
  };
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        <ListItemButton onClick={handleAdmin}>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Administration" />
          {openAdmin ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAdmin} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/user")}>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleMaster}>
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="Master lists" />
          {openMaster ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMaster} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/customerlist")}
            >
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/salesmenlist")}
            >
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Salesmen" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/servicemenlist")}
            >
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Servicemen" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleContract}>
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText primary="Contracts" />
          {openContract ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openContract} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/contracts")}
            >
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Contract List" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleInven}>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
          {openInven ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInven} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/materialpicking")}
            >
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Material List" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleInvo}>
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Invoice" />
          {openInvo ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInvo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/invoicelist")}
            >
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Invoice List" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
}

export default MyList;
