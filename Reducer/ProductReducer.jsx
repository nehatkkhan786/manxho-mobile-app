const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case "GET_ALL_GATEGORIES":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    case "ADD_TO_CART":
      const item = action.payload;
      const existItem = state.cart.find((x) => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item._id === existItem._id) {
              return { ...item, qty: item.qty + 1 };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "INCREMENT_ITEM":
      const incrementItem = action.payload;
      const incrementExistItem = state.cart.find(
        (x) => x._id === incrementItem._id
      );

      if (incrementExistItem) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item._id === incrementExistItem._id) {
              return { ...item, qty: item.qty + 1 };
            }
            return item;
          }),
        };
      }

    case "DECREMENT_ITEM":
      const decrementItem = action.payload;
      const decrementExistItem = state.cart.find(
        (x) => x._id === decrementItem._id
      );

      if (decrementExistItem) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item._id === decrementExistItem._id) {
              if (item.qty > 1) {
                return { ...item, qty: item.qty - 1 };
              }
            }
            return item;
          }),
        };
      }

    default:
      return state;
  }
};

export default ProductReducer;
