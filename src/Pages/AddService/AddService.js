import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  MenuItem,
  InputLabel,
} from "@mui/material";
import "../../App.css";

function AddService() {
  const navigate = useNavigate();
  const [customer, setCustomer] = React.useState("");
  const [project, setProject] = React.useState("");
  const [contract, setContract] = React.useState("");
  const [servicemen, setServicemen] = React.useState("");
  const handleCustomer = (event) => {
    setCustomer(event.target.value);
  };
  const handleProject = (event) => {
    setProject(event.target.value);
  };
  const handleContract = (event) => {
    setContract(event.target.value);
  };
  const handlesalesmen = (event) => {
    setServicemen(event.target.value);
  };
  const customers = [
    {
      value: "cust1",
      label: "Burgur factory",
    },
    {
      value: "cust2",
      label: "Impact BBDO",
    },
    {
      value: "cust3",
      label: "Roayal Palace",
    },
  ];
  const contracts = [
    {
      value: "contract1",
      label: "HSDCJD_0123",
    },
    {
      value: "contract2",
      label: "HSDCJD_0154",
    },
    {
      value: "contract3",
      label: "HSDCJD_0897",
    },
  ];
  const projects = [
    {
      value: "project1",
      label: "HSDPJD_0128_002_002",
    },
    {
      value: "project2",
      label: "HSDPJD_0332_013_023",
    },
    {
      value: "project3",
      label: "HSDPJD_0231_011_120",
    },
  ];
  const salesmens = [
    {
      value: "salesmen1",
      label: "Javed Shaikh",
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Add New Service
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
              <Grid item xs={12} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Customer Name"
                  select
                  onChange={handleCustomer}
                  size="small"
                  fullWidth
                >
                  {customers.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Contracts"
                  select
                  onChange={handleContract}
                  size="small"
                  fullWidth
                >
                  {contracts.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Projects"
                  select
                  onChange={handleProject}
                  size="small"
                  fullWidth
                >
                  {projects.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                  label="Servicemen"
                  select
                  onChange={handlesalesmen}
                  size="small"
                  fullWidth
                >
                  {salesmens.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={2.9} sx={{ mr: 2 }} />
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
              <Grid item xs={5.9} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Service Subject Name"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Frequency"
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
              <Grid item xs={5.9} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Consumables"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Quantity"
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
                onClick={() => navigate("/")}
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

export default AddService;
