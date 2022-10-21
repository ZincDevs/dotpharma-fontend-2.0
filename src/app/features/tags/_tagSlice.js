/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const tagSlice = createSlice({
  name: 'tags',
  initialState: {},
  reducers: {
    setTags: (state, action) => {
      state.tags = action?.payload?.tags;
    },
  },
});

export const { setTags } = tagSlice.actions;
export default tagSlice.reducer;
