import { createSlice } from '@reduxjs/toolkit'

type DeliveryState = {
  deliveryOpen: boolean
}

const initialState: DeliveryState = {
  deliveryOpen: false
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    openDelivery: (state) => {
      state.deliveryOpen = true
    },
    closeDelivery: (state) => {
      state.deliveryOpen = false
    }
  }
})

export const { openDelivery, closeDelivery } = deliverySlice.actions

export default deliverySlice.reducer
