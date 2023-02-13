import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  InputAdornment,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="bgImg">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 14 }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 500,
                height: 400,
              },
            }}
          >
            <Paper className="paperStyle" elevation={6}>
              <Grid
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ p: 2 }}
              >
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    align="center"
                    style={{ fontWeight: "bold" }}
                  >
                    Login
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="UserName"
                    placeholder="Enter Your Username"
                    size="small"
                    sx={{ mt: 2, mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    type="password"
                    label="Password"
                    placeholder="Enter Your Password"
                    sx={{ mb: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOpenIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Grid item xs={6} style={{ marginLeft: "10px" }}>
                    <Typography variant="body1">Forgot Password?</Typography>
                  </Grid>
                  <Grid item xs={6} style={{ marginLeft: "149px" }}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Remember Me"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Button
                    className="buttonStyle"
                    variant="contained"
                    size="small"
                    fullWidth
                    // onClick={() => navigate("/dashboard", { replace: true })}
                  >
                    Login{" "}
                  </Button>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" align="center">
                    Dont have an account? <a href="#">Signup</a>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
