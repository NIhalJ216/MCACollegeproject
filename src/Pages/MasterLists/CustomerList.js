import React from "react";
import {
  Grid,
  Button,
  Typography,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  TableBody,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { customersData } from "./CustomerListData";
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

function CustomerList() {
  return (
    <Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Customers
          </Typography>
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
            label="Name"
            sx={{ mr: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Address"
            sx={{ mr: 1 }}
          />
          <Button className="buttonStyle" variant="contained" sx={{ mr: 1 }}>
            Filter
          </Button>
          <Button className="buttonStyle" variant="contained">
            Clear
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Customer Number</StyledTableCell>
                  <StyledTableCell align="center">
                    Customer Name
                  </StyledTableCell>
                  <StyledTableCell align="center">Address</StyledTableCell>
                  <StyledTableCell align="center">
                    Mobile Number
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customersData.map((row) => (
                  <StyledTableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.customerNumber}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.customerName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.address}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.mobile}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CustomerList;
