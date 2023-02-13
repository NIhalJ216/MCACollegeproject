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
import EditIcon from "@mui/icons-material/Edit";
import { invoiceData } from "./InvoiceListData";
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

function InvoiceList() {
  return (
    <Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Invoice List
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
            label="Region"
            sx={{ mr: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Project Number"
            sx={{ mr: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Customer name"
            sx={{ mr: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Serviceman"
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
                  <StyledTableCell>Invoice Number</StyledTableCell>
                  <StyledTableCell align="center">Invoice Date</StyledTableCell>
                  <StyledTableCell align="center">
                    Project Number
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Customer Number
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Customer Name
                  </StyledTableCell>
                  <StyledTableCell align="center">Location</StyledTableCell>
                  <StyledTableCell align="center">Gross amount</StyledTableCell>
                  <StyledTableCell align="center">Discount</StyledTableCell>
                  <StyledTableCell align="center">Net amount</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoiceData.map((row) => (
                  <StyledTableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.invoiceNumber}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.invoiceDate}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.projectNumber}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.customerNumber}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.customerName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.location}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.grossAmt}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.discount}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.netAmt}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <EditIcon />
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

export default InvoiceList;
