// import React, { useContext, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { Typography } from "@mui/material";
// import { completeContext } from "../Context/CompleteContextProvider";
// import CompleteItem from "./CompleteItem";

// const CompleteList = () => {
//   const { cart, getCart, products } = useContext(completeContext);

//   useEffect(() => {
//     getCart();
//   }, []);

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
//         Completed Todo
//       </Typography>
//       <Stack spacing={2} direction="row">
//         <Button
//           variant="contained"
//           size="large"
//           sx={{
//             width: "100%",
//             height: "100px",
//           }}
//         >
//           Delete
//         </Button>
//       </Stack>
//       {cart ? (
//         products.map((item) => <CompleteItem key={item.id} item={item} />)
//       ) : (
//         <h2>Loading ...</h2>
//       )}
//     </Box>
//   );
// };

// export default CompleteList;
