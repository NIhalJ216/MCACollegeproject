import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Paper,
} from "@mui/material";
import "../../App.css";

function AddNewUser() {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Add User
        </Typography>
      </Grid>
      <Grid
        container
        rowSpacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={6}>
          <Paper sx={{ p: 2 }}>
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
                  label="Employee Id"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Legal Entity"
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
              <Grid item xs={12} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Name"
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
                  label="ShortName"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="UserName"
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
              <Grid item xs={12} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Email"
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
                  label="Mobile Number"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Country Code"
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
                mt: 2,
              }}
            >
              <Grid item xs={6} sx={{ mr: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-label"
                    label="Role"
                    size="small"
                  >
                    <MenuItem value={10}>Super Admin</MenuItem>
                    <MenuItem value={20}>IT Admin</MenuItem>
                    <MenuItem value={30}>Ops Admin</MenuItem>
                    <MenuItem value={30}>Serviceman</MenuItem>
                    <MenuItem value={30}>Salesman</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ mr: 2 }}>
                <FormControl fullWidth>
                  <InputLabel>Region</InputLabel>
                  <Select id="demo-simple-select" label="Region" size="small">
                    <MenuItem value={10}>Saudi Arabia</MenuItem>
                    <MenuItem value={20}>United Arab Emirates</MenuItem>
                    <MenuItem value={30}>Baharain</MenuItem>
                    <MenuItem value={40}>Qatar</MenuItem>
                  </Select>
                </FormControl>
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
                onClick={() => navigate("/user")}
              >
                Cancel
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddNewUser;
