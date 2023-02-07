import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { listContext } from "../Context/ListContextProvider";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
};

const EditTodo = () => {
  const { saveEditProduct, getProductDetails, productDetails } =
    useContext(listContext);

  const [product, setProduct] = useState(productDetails);

  const [open, setOpen] = useState(true);

  const params = useParams();

  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  console.log(product);

  const handleInp = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    let newProduct = {
      title: product.title,
      description: product.description,
    };

    saveEditProduct(newProduct, params.id);
    navigate("/");
  }

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "30px" }}
          >
            Edit Modal Window
          </Typography>
          <TextField
            sx={{ marginBottom: "30px", width: "300px" }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            value={product.title || ""}
            onChange={handleInp}
          />
          <TextField
            sx={{ marginBottom: "30px", width: "300px" }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            value={product.description || ""}
            onChange={handleInp}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ width: "200px" }}
            onClick={handleSave}
          >
            Edit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditTodo;
