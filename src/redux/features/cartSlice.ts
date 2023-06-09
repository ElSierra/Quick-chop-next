import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export type CartState = {
  data: {
    name: string;
    price: string;
    photo: string;
    quantity: string;
    id: string;
    restaurantId: string;
  }[];
};

const initialState = {
  data:
    typeof window !== "undefined" && localStorage.getItem("qcCart")
      ? JSON.parse(localStorage.getItem("qcCart") || "")
      : [],
} as CartState;

export const cartDataReducer = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
    },
    updateState: (state, action: PayloadAction<any>) => {
      console.log("payload", action.payload);
      state.data = action.payload;
    },
  },
});

export const { updateState, reset } = cartDataReducer.actions;
export default cartDataReducer.reducer;
