import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList.jsx";
import CompleteList from "../CardTodo/CompleteList.jsx";

const MainPage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
              fontSize: "30px",
              fontWeight: "bolder",
            }}
          >
            ModuleOne Todo-List
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              minHeight: "400px",
              "& > :not(style)": {
                m: 1,
                width: 345,
              },
            }}
          >
            <Card
              sx={{
                minWidth: 275,
                borderRadius: "35px",
                backgroundColor: "#0096FF",
              }}
            >
              <CardContent>
                <AddTodo />
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: "35px",
                backgroundColor: "#0096FF",
              }}
            >
              <CardContent>
                <TodoList />
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: "35px",
                backgroundColor: "#0096FF",
              }}
            >
              <CardContent>
                <CompleteList />
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default MainPage;
