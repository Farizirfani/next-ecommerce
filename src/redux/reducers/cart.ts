"use client";

import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

export interface Product {
  id: String;
  name: String;
  singlePrice: Number;
  amout: Number;
  image: StaticImageData;
}

export interface ProductState {
  value: Product[];
}

const initialState: ProductState = { value: [] };

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state: any, action: PayloadAction<ProductState>) => {
      const currentState = current(state);
      if (currentState.value.length < 0) {
        state.value.push(action.payload);
        return;
      }
      return {
        value: [...currentState.value, action.payload],
      };
    },
    deleteProduct: (state: any, action: PayloadAction<string>) => {
      const currentState = current(state);
      const newProducts = currentState.value.filter(
        (product: any) => product.id !== action.payload
      );
      return {
        value: newProducts,
      };
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
