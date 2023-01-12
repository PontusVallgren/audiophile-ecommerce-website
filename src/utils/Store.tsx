import React, {
  createContext,
  PropsWithChildren,
  useReducer,
  Dispatch,
} from "react";
import Cookies from "js-cookie";
import { product } from "../types";

type CartProduct = {
  img: string;
  name: string;
  price: number;
  quantity: number;
  _id: string;
};

type InitialStateType = {
  cart: {
    cartItems: CartProduct[];
    cartTotalAmount: number;
    cartTotalQuantity: number;
  };
};

const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems") as string)
      : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
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
    case "CART_REMOVE_ALL": {
      const cartItems: CartProduct[] = [];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_TOTAL_SUM": {
      let { total, quantity } = state.cart.cartItems.reduce(
        (cartTotal: any, cartItem: CartProduct) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cart.cartTotalAmount = total;
      state.cart.cartTotalQuantity = quantity;
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
