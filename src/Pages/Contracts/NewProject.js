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
} from "@mui/material";
import "../../App.css";

function NewProject() {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          New Project
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
              <Grid item xs={6} sx={{ mr: 2 }}>
                <TextField
                  variant="outlined"
                  label="Region"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sx={{ ml: 1, mr: 2 }}>
                <FormControl>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    Service Type
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Audit"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Maintenance"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Refill"
                    />
                  </RadioGroup>
                </FormControl>
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
                  label="Project Number"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2.9} sx={{ mr: 2 }} />
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Project Location"
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
                  label="Project Name"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  label="Project start date"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3} sx={{ ml: 2 }}>
                <TextField
                  variant="outlined"
                  label="Project end date"
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

export default NewProject;
