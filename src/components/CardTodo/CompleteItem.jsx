import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { completeContext } from "../Context/CompleteContextProvider";

const CompleteItem = ({ item }) => {
  const { deleteProduct } = useContext(completeContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        minHeight: "100px",
        "& > :not(style)": {
          m: 1,
          width: 315,
        },
      }}
    >
      <Card
        sx={{
          minWidth: 175,
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {item.description}
            </Typography>
          </Box>
          <Stack spacing={1} direction="column">
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "50%",
              }}
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CompleteItem;
