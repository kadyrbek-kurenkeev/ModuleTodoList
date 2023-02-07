import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TodoItem from "./TodoItem.jsx";
import { listContext } from "../Context/ListContextProvider.js";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const { getProducts, products } = useContext(listContext);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

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
        Todo List
      </Typography>
      {products ? (
        products.map((item) => <TodoItem key={item.id} item={item} />)
      ) : (
        <h2>Loading ...</h2>
      )}
    </Box>
  );
};

export default TodoList;
