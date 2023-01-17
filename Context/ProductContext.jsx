import axios from "axios";
import { createContext, useReducer } from "react";
import { useToast } from "react-native-toast-notifications";
import ProductReducer from "../Reducer/ProductReducer";

const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const toast = useToast();
  const initialState = {
    products: [],
    categories: [],
    cart: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // Get All the Products from the Backend Endpoint
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://api.manxho.co.in/api/products/"
      );

      dispatch({
        type: "GET_ALL_PRODUCTS",
        payload: data,
      });
    } catch (error) {}
  };

  // Get All The Categories from the backend API
  const getAllCategories = async () => {
    const { data } = await axios.get(
      "https://api.manxho.co.in/api/categories/"
    );
    dispatch({
      type: "GET_ALL_GATEGORIES",
      payload: data,
    });
  };

  // Add to Cart Function

  const addToCart = async (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        weight: product.qty,
        qty: 1,
      },
    });
    toast.show("Item Added Successfully!", {
      type: "success",
      animationType: "zoom-in",
    });
  };

  const removeFromCart = async (_id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: _id,
    });
    toast.show("Item Removed Successfully", {
      type: "success",
      animationType: "slide-in",
    });
  };

  return (
    <productContext.Provider
      value={{
        // Global States
        products: state.products,
        categories: state.categories,
        cart: state.cart,

        // Global Functions
        getAllProducts: getAllProducts,
        getAllCategories: getAllCategories,
        addToCart: addToCart,
        removeFromCart:removeFromCart,
        dispatch,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default productContext;
