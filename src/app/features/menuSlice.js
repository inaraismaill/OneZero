import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  error: null,
  allFetchData: [],
  selectedCategory:null,
}

export const fetchCategory = createAsyncThunk("menu/fetchCategory", async () => {
  const res = await axios("/menu.json")
  return res.data
})

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    selectCategoryById: (state, action) => {
      const categoryId = action.payload;
      state.selectedCategory = state.allFetchData?.data?.categories?.find(
        (category) => category.id === categoryId
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.allFetchData = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.error = action.error.message
      state.isLoading = false
    })
  }
})

export const {selectCategoryById } = menuSlice.actions

export default menuSlice.reducer