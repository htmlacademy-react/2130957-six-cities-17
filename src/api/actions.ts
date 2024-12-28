import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkOptions} from './types.ts';
import {Place} from '../types.ts';
import {ApiRoutes} from './const.ts';
import {setOffers} from '../store/action.ts';
import { getLoading } from '../store/reducer.ts';


export const fetchOffersAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'offers/get',
  async (_arg, { dispatch, extra: api }) => {
    const { data, status } = await api.get<Place[]>(ApiRoutes.Offers);

    if (status === 200) {
      dispatch(setOffers(data));
      dispatch(getLoading(false));
    }
  }
);
