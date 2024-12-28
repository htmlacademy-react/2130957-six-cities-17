import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOptionName } from '../../types';
import { RootState } from '../index';
import { sortOptionNames} from '../../const';
import { Slices } from '../../const';

export interface State {

  sortOption: SortOptionName;
}

export const initialState: State = {
  sortOption: sortOptionNames.Popular,
};

const sortsSlice = createSlice({
  name: Slices.Sort,
  initialState,
  reducers: {
    changeSortOption(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
    },
  },
});

export const {changeSortOption } = sortsSlice.actions;

export const selectSortOption = (state: RootState): string => state.sort.sortOption;

export default sortsSlice.reducer;
