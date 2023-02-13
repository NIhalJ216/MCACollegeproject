import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Grid, Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../../App.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4ad18f",
    color: theme.palette.common.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <StyledTableCell
          style={{
            backgroundColor: "#c6ffdb",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell
          component="th"
          scope="row"
          style={{
            backgroundColor: "#c6ffdb",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          {row.number}
        </StyledTableCell>
        <StyledTableCell
          align="center"
          style={{
            backgroundColor: "#c6ffdb",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          {row.name}
        </StyledTableCell>
        <StyledTableCell
          align="center"
          style={{
            backgroundColor: "#c6ffdb",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          {row.active}
        </StyledTableCell>
        <StyledTableCell
          align="center"
          style={{
            backgroundColor: "#c6ffdb",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          {row.notes}
        </StyledTableCell>
        <StyledTableCell
          align="right"
          style={{
            backgroundColor: "#c6ffdb",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
          }}
        >
          {<EditIcon />}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow
        sx={{ backgroundColor: "#c6ffdb", border: "1px solid black" }}
      >
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Projects
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow sx={{ border: "1px solid black" }}>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell align="center">
                      Project Number
                    </StyledTableCell>
                    <StyledTableCell align="center">Location</StyledTableCell>
                    <StyledTableCell align="center">
                      Last Service Date
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Last Service By
                    </StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody style={{ border: "1px solid black" }}>
                  {row.projects.map((prj) => (
                    <StyledTableRow key={prj.id}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        style={{
                          borderTop: "1px solid black",
                          borderBottom: "1px solid black",
                        }}
                      >
                        {prj.status}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        style={{
                          borderTop: "1px solid black",
                          borderBottom: "1px solid black",
                        }}
                      >
                        {prj.projNum}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        style={{
                          borderTop: "1px solid black",
                          borderBottom: "1px solid black",
                        }}
                      >
                        {prj.location}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        style={{
                          borderTop: "1px solid black",
                          borderBottom: "1px solid black",
                        }}
                      >
                        {prj.lastServiceDate}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        style={{
                          borderTop: "1px solid black",
                          borderBottom: "1px solid black",
                        }}
                      >
                        {prj.lastServiceBy}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        style={{
                          borderTop: "1px solid black",
                          borderBottom: "1px solid black",
                        }}
                      >
                        <EditIcon />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

const rows = [
  {
    id: "0",
    number: "HSDCJD_0123",
    name: "Burgur factory",
    active: "4/10",
    notes: "Burgur selling factory need...",
    projects: [
      {
        id: "0",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
      {
        id: "1",
        status: "Active",
        projNum: "HSDPJD_0332_013_023",
        location: "Tamlik Towers",
        lastServiceDate: "01-04-2018",
        lastServiceBy: "Javed",
      },
      {
        id: "2",
        status: "Active",
        projNum: "HSDPJD_0231_011_120",
        location: "Gas maintenance room",
        lastServiceDate: "01-05-2018",
        lastServiceBy: "Navab",
      },
    ],
  },
  {
    id: "1",
    number: "HSDCJD_0154",
    name: "Impact BBDO",
    active: "8/10",
    notes: "Impact BBDO installation require...",
    projects: [
      {
        id: "0",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
      {
        id: "1",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
      {
        id: "2",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
    ],
  },
  {
    id: "2",
    number: "HSDCJD_0897",
    name: "Roayal Palace",
    active: "34/50",
    notes: "Royal palace requires...",
    projects: [
      {
        id: "0",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
      {
        id: "1",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
      {
        id: "2",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
    ],
  },
  {
    id: "3",
    number: "HSDCJD_0457",
    name: "Arrow Juice",
    active: "50/70",
    notes: "Arow juice last service...",
    projects: [
      {
        id: "0",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
      {
        id: "1",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
      {
        id: "2",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
    ],
  },
  {
    id: "4",
    number: "HSDCJD_0987",
    name: "Jeddha kitchens",
    active: "3/10",
    notes: "Jeddha kitchens installations...",
    projects: [
      {
        id: "0",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
      {
        id: "1",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
      {
        id: "2",
        status: "Active",
        projNum: "HSDPJD_0128_002_002",
        location: "jed_refill tower",
        lastServiceDate: "01-01-2018",
        lastServiceBy: "Aris",
      },
    ],
  },
];

function CollapsibleTable() {
  const navigate = useNavigate();
  return (
    <Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
            marginLeft: "675px",
          }}
        >
          Contracts
        </Typography>
        <Button
          className="buttonStyle"
          variant="contained"
          sx={{ mb: 2, ml: 50 }}
          onClick={() => navigate("/newcontract")}
        >
          Add New Contract
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          padding: "20px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          label="Country"
          sx={{ mr: 1 }}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Region"
          sx={{ mr: 1 }}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Customer Number"
          sx={{ mr: 1 }}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Customer Name"
          sx={{ mr: 1 }}
        />
        <Button className="buttonStyle" variant="contained" sx={{ mr: 1 }}>
          Filter
        </Button>
        <Button className="buttonStyle" variant="contained">
          Clear
        </Button>
      </Grid>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell
                style={{
                  borderTop: "1px solid black",
                  borderLeft: "1px solid black",
                }}
              />
              <StyledTableCell
                style={{
                  borderTop: "1px solid black",
                }}
              >
                Contract Number
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{
                  borderTop: "1px solid black",
                }}
              >
                Customer
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{
                  borderTop: "1px solid black",
                }}
              >
                Active/Total Projects
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{
                  borderTop: "1px solid black",
                }}
              >
                Notes
              </StyledTableCell>
              <StyledTableCell
                align="right"
                style={{
                  borderTop: "1px solid black",
                  borderRight: "1px solid black",
                }}
              >
                Action
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default CollapsibleTable;
