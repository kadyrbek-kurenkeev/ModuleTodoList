import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API_COMPLETE } from "../helper/helper";

export const completeContext = createContext();

const INIT_STATE = {
  products: [],
  productDetails: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCT_DETAIL":
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
}

const CompleteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const res = await axios(`${API_COMPLETE}/${window.location.search}`);

      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function addProductToCart(newProduct) {
    await axios.post(API_COMPLETE, newProduct);
  }

  async function deleteProduct(id) {
    try {
      const res = await axios.delete(`${API_COMPLETE}/${id}/`);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  }

  const getProductDetails = async (id) => {
    try {
      const res = await axios.get(`${API_COMPLETE}/${id}`);
      dispatch({
        type: "GET_PRODUCT_DETAIL",
        payload: res.data,
      });
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  let values = {
    products: state.products,
    productDetails: state.productDetails,
    addProductToCart,
    getProducts,
    deleteProduct,
    getProductDetails,
  };
  return (
    <div>
      <completeContext.Provider value={values}>
        {children}
      </completeContext.Provider>
    </div>
  );
};

export default CompleteContextProvider;
