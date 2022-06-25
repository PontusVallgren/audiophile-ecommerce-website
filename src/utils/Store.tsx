import React, {
  createContext,
  PropsWithChildren,
  useReducer,
  Dispatch,
} from "react";
import Cookies from "js-cookie";
import { product } from "../types";

type InitialStateType = {
  cart: {
    cartItems: product[];
  };
};

const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems") as string)
      : [],
  },
};

export const Store = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item: product) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item: product) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
};

export const StoreProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
