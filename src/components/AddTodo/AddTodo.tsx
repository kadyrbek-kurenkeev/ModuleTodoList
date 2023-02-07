import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { listContext } from "../Context/ListContextProvider";

const AddTodo: React.FC = () => {
  const { addProducts } = useContext(listContext);

  const [product, setProduct] = useState({
    title: "",
    description: "",
  });

  const handleInp: React.FormEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    if (!product.title.trim() || !product.description.trim()) {
      alert("Заполните поля!");
      return;
    }

    let newProduct = {
      title: product.title,
      description: product.description,
    };

    addProducts(newProduct);
    window.location.reload();
  }

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
        Add Todo
      </Typography>
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
              "& > :not(style)": { m: 1, width: "28ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              value={product.title}
              onChange={handleInp}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              name="description"
              value={product.description}
              onChange={handleInp}
            />
          </Box>

          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "80%",
                marginLeft: "8px",
              }}
              onClick={handleSave}
            >
              Add
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddTodo;
