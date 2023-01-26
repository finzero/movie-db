import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { ICategory } from '../types/movie.type';

const initialState: ICategory[] = [
  {
    id: 1,
    code: 'now_playing',
    label: 'Now Playing',
    link: '',
    isActive: true,
  },
  { id: 2, code: 'popular', label: 'Popular', link: '', isActive: false },
  { id: 3, code: 'top_rated', label: 'Top Rated', link: '', isActive: false },
  { id: 4, code: 'upcoming', label: 'Upcoming', link: '', isActive: false },
];

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      return state.map((menu) => ({
        ...menu,
        isActive: menu.id === action.payload,
      }));
    },
  },
});

export const activeMenuSelector = createSelector(
  (state: RootState) => state.menu,
  (menu) => menu.find((m: ICategory) => m.isActive === true)
);

export const { setActiveMenu } = menuSlice.actions;

export default menuSlice.reducer;
