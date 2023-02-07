// import React, { createContext, useReducer } from "react";

// export const completeContext = createContext();

// const INIT_STATE = {
//   cart: JSON.parse(localStorage.getItem("cart")),
// };

// function reducer(state = INIT_STATE, action) {
//   switch (action.type) {
//     case "GET_CART":
//       return { ...state, cart: action.payload };
//     default:
//       console.log("");
//   }
// }

// const CopmpleteContexProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   const getCart = () => {
//     let cart = JSON.parse(localStorage.getItem("cart"));

//     if (!cart) {
//       localStorage.setItem("cart", JSON.stringify({ products: [] }));
//       cart = {
//         products: [],
//       };
//     }
//     dispatch({
//       type: "GET_CART",
//       payload: cart,
//     });
//   };

//   const addProductToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem("cart"));

//     if (!cart) {
//       cart = {
//         products: [],
//       };
//     }

//     let newProduct = {
//       item: product,
//     };

//     let productToFind = cart.products.filter((elem) => elem.item === product);

//     if (productToFind.length === 0) {
//       cart.products.push(newProduct);
//     } else {
//       cart.products = cart.products.filter(
//         (elem) => elem.item.id !== product.id
//       );
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));

//     dispatch({
//       type: "GET_CART",
//       payload: cart,
//     });
//   };

//   function deleteCartProduct(id) {
//     let cart = JSON.parse(localStorage.getItem("cart"));

//     cart.products = cart.products.filter((elem) => elem.item.id !== id);

//     localStorage.setItem("cart", JSON.stringify(cart));
//     getCart();
//     dispatch({
//       type: "GET_CART",
//       payload: cart,
//     });
//   }
//   let values = {
//     cart: state.cart,
//     addProductToCart,
//     getCart,
//     deleteCartProduct,
//   };
//   return (
//     <div>
//       <completeContext.Provider value={values}>
//         {children}
//       </completeContext.Provider>
//     </div>
//   );
// };

// export default CopmpleteContexProvider;
