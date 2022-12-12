import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { IMenuItem } from '../components/MenuItem/MenuItem';

const initialState: IMenuItem[] = [
  { id: 1, label: 'New Releases', link: '', isActive: true },
  { id: 2, label: 'Trending', link: '', isActive: false },
  { id: 3, label: 'Comming Soon', link: '', isActive: false },
  { id: 4, label: 'Favourites', link: '', isActive: false },
  { id: 5, label: 'Watch Later', link: '', isActive: false },
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
  (menu) => menu.find((m: IMenuItem) => m.isActive)
);

export const { setActiveMenu } = menuSlice.actions;

export default menuSlice.reducer;
