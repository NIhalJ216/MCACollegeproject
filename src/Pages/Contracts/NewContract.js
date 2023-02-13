import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button, TextField, Paper } from "@mui/material";
import "../../App.css";

function NewContract() {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          New Contract
        </Typography>
      </Grid>
      <Grid
        container
        rowSpacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={12}>
          <Paper sx={{ p: 2 }}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={6} sx={{ mr: 2, mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Customer Details
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ mr: 2, mb: 2 }}>
                <Typography variant="body1" sx={{ ml: 2, fontWeight: "bold" }}>
                  Contract Details
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={6} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Country"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Region"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Contract Name"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Grid item xs={6.3} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Customer Number"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Contract Signed On"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  label="Contract Start Date"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Grid item xs={2.9} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Customer Name"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3} sx={{ mr: 2 }} />
              <Grid item xs={2.9} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Discount %"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Grid item xs={6} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Customer Address"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={6} sx={{ mr: 2, mt: 2 }}>
                <TextField
                  variant="outlined"
                  multiline
                  rows={2}
                  label="Notes"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Button
                className="buttonStyle"
                variant="contained"
                sx={{ mr: 2 }}
              >
                Save
              </Button>
              <Button
                className="buttonStyle"
                variant="contained"
                onClick={() => navigate("/contracts")}
                sx={{ mr: 2 }}
              >
                Cancel
              </Button>
              <Button
                className="buttonStyle"
                variant="contained"
                onClick={() => navigate("/newproject")}
              >
                Add New Project
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NewContract;
