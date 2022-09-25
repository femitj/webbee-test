import { createSlice } from '@reduxjs/toolkit';

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    inventories: [
      {
        id: Math.random(),
        name: 'Type Name',
        title: 'Name',
        fields: [
          {
            type: 'text',
            label: 'Name',
          },
        ],
      },
    ],
    itemList: [],
  },
  reducers: {
    setInventory: (state, action) => {
      state.inventories = action.payload;
    },
    setItems: (state, action) => {
      state.itemList = action.payload;
    },
  },

  extraReducers(builder) {},
});

export const { setInventory, setItems } = inventorySlice.actions;
export default inventorySlice.reducer;
