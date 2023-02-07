import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { listContext } from "../Context/ListContextProvider";
import { completeContext } from "../Context/CompleteContextProvider";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ item }) => {
  const { deleteProduct } = useContext(listContext);

  const { addProductToCart } = useContext(completeContext);

  const [product, setProduct] = useState({
    title: "",
    description: "",
  });

  const handleInp = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    let newProduct = {
      title: item.title,
      description: item.description,
    };

    addProductToCart(newProduct);
    deleteProduct(item.id);
    window.location.reload();
  }

  const navigate = useNavigate();

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
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              value={item.title}
              onChange={handleInp}
            >
              {item.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              value={item.description}
              onChange={handleInp}
            >
              {item.description}
            </Typography>
          </Box>
          <Stack
            spacing={1}
            direction="column"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "50%",
              }}
              onClick={() => handleSave(item.id)}
            >
              Complete
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "50%",
              }}
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TodoItem;
