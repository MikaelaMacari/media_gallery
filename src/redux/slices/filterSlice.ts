import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export enum FilterTypes {
  Image = 'photo',
  Video = 'mp4',
  Gif = 'gif',
}

export interface FilterStateInterface {
  filterType: FilterTypes | string;
}

const initialState: FilterStateInterface = {
  filterType: '',
};

export const filterSlice: Slice<FilterStateInterface> = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterType: (
      state,
      { payload: filterType }: PayloadAction<FilterTypes>,
    ) => {
      state.filterType = filterType;
    },
  },
});

export const { setFilterType } = filterSlice.actions;

export default filterSlice.reducer;
