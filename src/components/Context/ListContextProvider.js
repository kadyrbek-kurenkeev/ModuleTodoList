import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API_LIST } from "../helper/helper";

export const listContext = createContext();

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

const ListContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const res = await axios(`${API_LIST}/${window.location.search}`);

      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function addProducts(newProduct) {
    await axios.post(API_LIST, newProduct);
  }

  async function deleteProduct(id) {
    try {
      const res = await axios.delete(`${API_LIST}/${id}/`);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  }

  const getProductDetails = async (id) => {
    try {
      const res = await axios.get(`${API_LIST}/${id}`);
      dispatch({
        type: "GET_PRODUCT_DETAIL",
        payload: res.data,
      });
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  const saveEditProduct = async (newProd, id) => {
    try {
      const res = await axios.patch(`${API_LIST}/${id}`, newProd);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  let values = {
    products: state.products,
    productDetails: state.productDetails,
    addProducts,
    getProducts,
    deleteProduct,
    saveEditProduct,
    getProductDetails,
  };
  return (
    <div>
      <listContext.Provider value={values}>{children}</listContext.Provider>
    </div>
  );
};

export default ListContexProvider;
