import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { completeContext } from "../Context/CompleteContextProvider";
import CompleteItem from "./CompleteItem";

const CompleteList = () => {
  const { getProducts, products } = useContext(completeContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
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
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
          fontSize: "20px",
          fontWeight: "bolder",
        }}
      >
        Completed Todo
      </Typography>
      <Stack spacing={2} direction="row"></Stack>
      {products ? (
        products.map((item) => <CompleteItem key={item.id} item={item} />)
      ) : (
        <h2>Loading ...</h2>
      )}
    </Box>
  );
};

export default CompleteList;
