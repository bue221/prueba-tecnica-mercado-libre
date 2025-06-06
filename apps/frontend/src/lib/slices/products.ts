import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@mercado-libre/shared'

interface ProductsState {
  product: Product | null
}

const initialState = { product: null } satisfies ProductsState as ProductsState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<Product | null>) {
      state.product = action.payload
    },
  },
})

export const { setProduct } = counterSlice.actions
export default counterSlice.reducer