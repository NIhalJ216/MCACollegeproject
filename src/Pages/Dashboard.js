import React from "react";
import { Grid, Typography, Container, Card } from "@mui/material";
import "../App.css";

function Dashboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              fontFamily: "Libre Franklin, sans-serif",
            }}
          >
            Dashboard
          </Typography>
        </Grid>
      </Grid>
      <Container
        style={{
          maxWidth: "1200px",
          padding: "0.8rem",
        }}
      >
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} sm={6}>
                <Card
                  style={{
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#4ad18f",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "Libre Franklin, sans-serif",
                    }}
                  >
                    Item Consumption
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  style={{
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#4ad18f",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "Libre Franklin, sans-serif",
                    }}
                  >
                    Unfinished Tasks
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card
                  style={{
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#4ad18f",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "Libre Franklin, sans-serif",
                    }}
                  >
                    Projects Pending Renewal
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  style={{
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#4ad18f",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "Libre Franklin, sans-serif",
                    }}
                  >
                    Projects Pending Uninstallation
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card
                  style={{
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#4ad18f",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "Libre Franklin, sans-serif",
                    }}
                  >
                    Partially Completed Tasks – Stock Hold
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  style={{
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#4ad18f",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "Libre Franklin, sans-serif",
                    }}
                  >
                    Projects on Hold
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} sm={12}>
                <Card
                  style={{
                    height: "56vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#4ad18f",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "Libre Franklin, sans-serif",
                    }}
                  >
                    Invoice Discrepancies
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
