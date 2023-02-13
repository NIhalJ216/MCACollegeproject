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
import { materialListData } from "./MaterialListData";
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

function MaterialPicking() {
  return (
    <Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Material Picking List
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
            label="Stock Code"
            sx={{ mr: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Description"
            sx={{ mr: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Business"
            sx={{ mr: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="UOM"
            sx={{ mr: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="On-hand"
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
                  <StyledTableCell>Stock Code</StyledTableCell>
                  <StyledTableCell align="center">Description</StyledTableCell>
                  <StyledTableCell align="center">Quantity</StyledTableCell>
                  <StyledTableCell align="center">
                    Unit of measurement
                  </StyledTableCell>
                  <StyledTableCell align="center">On-hand</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {materialListData.map((row) => (
                  <StyledTableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.stockCode}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.uom}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.onhand}
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

export default MaterialPicking;
