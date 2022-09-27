import { createSlice } from '@reduxjs/toolkit';
import { getObjKeys } from '../../utils/helper';

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
    itemList: [{}],
  },
  reducers: {
    setInventory: (state, action) => {
      state.inventories = action.payload;
    },
    setNewInventory: (state) => {
      const id = Math.random();
      state.inventories = [
        ...state.inventories,
        {
          id: id,
          name: ' ',
          title: '',
          fields: [],
        },
      ];
    },
    updateInventory: (state, action) => {},
    deleteInventory: (state, action) => {
      const newItem = [...state.inventories]?.filter(
        (x) => x?.id !== action.payload
      );
      state.inventories = newItem;
    },
    updateInventoryItem: (state, action) => {
      const { item, from, value } = action.payload;
      state.inventories = [...state.inventories].map((inventory) =>
        inventory.id === item?.id ? { ...item, [from]: value } : inventory
      );
    },
    setInventoryField: (state, action) => {
      const item = action.payload.item;
      const newField = action.payload.newField;
      const currentList = state.inventories;
      const newItem = [
        ...item.fields,
        {
          type: newField?.id,
          label: '',
          id: Math.random(),
        },
      ];
      const newList = currentList.map((val) =>
        val.id === item.id ? { ...val, fields: newItem } : val
      );
      state.inventories = newList;
    },
    removeInventoryField: (state, action) => {
      const { fieldId, item } = action.payload;
      state.inventories = [...state.inventories].map((inventory) =>
        inventory.id === item?.id
          ? {
              ...item,
              fields: [...item?.fields.filter((y: any) => y?.id !== fieldId)],
            }
          : inventory
      );
    },
    updateInventoryField: (state, action) => {
      const { value, item, field, from = 'type' } = action.payload;
      state.inventories = [...state.inventories].map((inventory) =>
        inventory.id === item?.id
          ? {
              ...item,
              fields: [...item?.fields].map((y) =>
                y?.id === field?.id
                  ? {
                      ...field,
                      [from]: value,
                    }
                  : y
              ),
            }
          : inventory
      );
    },
    setItems: (state, action) => {
      state.itemList = action.payload;
    },
    setNewItem: (state, action) => {
      const id = action.payload;
      const items = state.itemList;
      const category = state.inventories?.find((x) => String(x?.id) === id);
      const dataKeys: any = category?.fields?.map((x: any) => x?.id);
      const obj = getObjKeys(dataKeys);
      state.itemList = [
        ...items,
        {
          categoryId: category?.id,
          id: Math?.random(),
          ...obj,
        },
      ];
    },
    updateItem: (state, action) => {
      const { item, from, value } = action.payload;
      state.itemList = [...state.itemList].map((val: any) =>
        val.id === item?.id ? { ...item, [from]: value } : val
      );
    },
  },

  extraReducers(builder) {},
});

export const {
  setInventory,
  setItems,
  deleteInventory,
  setNewInventory,
  setInventoryField,
  removeInventoryField,
  updateInventoryField,
  updateInventoryItem,
  setNewItem,
  updateItem,
} = inventorySlice.actions;
export default inventorySlice.reducer;
