// import React, { useContext, useState } from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { Typography } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import { ListContext } from "../Context/ListContextProvider";

// const AddTodo: React.FunctionComponent = () => {
//   const { addProducts } = useContext(ListContext);

//   const [product, setProduct] = useState({
//     title: "",
//     descriptions: "",
//   });

//   const handleInp = (event) => {
//     if (e.target.name === "image") {
//       setProduct({
//         ...product,
//         [e.target.name]: e.target.files[0],
//       });
//     } else {
//       setProduct({
//         ...product,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   function handleSave() {
//     let newProduct = new FormData();
//     newProduct.append("title", product.title);
//     newProduct.append("descriptions", product.descriptions);

//     addProducts(newProduct);
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         minHeight: "400px",
//         "& > :not(style)": {
//           m: 1,
//           width: 345,
//         },
//       }}
//     >
//       <Typography
//         sx={{
//           display: "flex",

//           justifyContent: "center",
//           paddingTop: "10px",
//           paddingBottom: "10px",
//           fontSize: "20px",
//           fontWeight: "bolder",
//         }}
//       >
//         Add Todo
//       </Typography>
//       <Card
//         sx={{
//           minWidth: 175,
//           borderRadius: "20px",
//         }}
//       >
//         <CardContent>
//           <Box
//             component="form"
//             sx={{
//               "& > :not(style)": { m: 1, width: "28ch" },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField id="outlined-basic" label="Title" variant="outlined" />
//             <TextField
//               id="outlined-basic"
//               label="Description"
//               variant="outlined"
//             />
//           </Box>
//           <Stack spacing={2} direction="row">
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 width: "80%",
//                 marginLeft: "8px",
//               }}
//             >
//               Add
//             </Button>
//           </Stack>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default AddTodo;

import React from "react";

const AddTodo = () => {
  return <div></div>;
};

export default AddTodo;
