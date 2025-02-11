import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Image, ImagePlay, LucideProps, Play } from 'lucide-react';

import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface FilterInterface {
  title: string;
  type: FilterTypes;
  icon: ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}

export enum FilterTypes {
  Image = 'photo',
  Video = 'mp4',
  Gif = 'gif',
}

export interface FilterStateInterface {
  filters: FilterInterface[];
  selectedFilterTypes: FilterTypes[];
}

const initialState: FilterStateInterface = {
  filters: [
    {
      title: 'Image',
      type: FilterTypes.Image,
      icon: Image,
    },
    {
      title: 'Videos',
      type: FilterTypes.Video,
      icon: Play,
    },
    {
      title: 'GIFs',
      type: FilterTypes.Gif,
      icon: ImagePlay,
    },
  ],
  selectedFilterTypes: [],
};

export const filterSlice: Slice<FilterStateInterface> = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterType: (
      state,
      { payload: filterType }: PayloadAction<FilterTypes | FilterTypes[]>,
    ) => {
      if (Array.isArray(filterType)) {
        state.selectedFilterTypes = filterType;
      } else {
        state.selectedFilterTypes.push(filterType);
      }
    },
  },
});

export const { setFilterType } = filterSlice.actions;

export default filterSlice.reducer;
