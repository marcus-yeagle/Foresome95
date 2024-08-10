import { AppThunk } from '..';
import { getSides } from '../../API/SidesService';
import { Side } from '../reducers/sides';

export const FETCH_SIDES_REQUEST = 'FETCH_SIDES_REQUEST';
export const FETCH_SIDES_SUCCESS = 'FETCH_SIDES_SUCCESS';
export const FETCH_SIDES_FAILURE = 'FETCH_SIDES_FAILURE';

interface FetchSidesRequestAction {
  type: typeof FETCH_SIDES_REQUEST;
}

interface FetchSidesSuccessAction {
  type: typeof FETCH_SIDES_SUCCESS;
  payload: Side[];
}

interface FetchSidesFailureAction {
  type: typeof FETCH_SIDES_FAILURE;
  error: string;
}

export type SidesActionTypes =
  | FetchSidesRequestAction
  | FetchSidesSuccessAction
  | FetchSidesFailureAction;

export const fetchSidesRequest = (): SidesActionTypes => ({
  type: FETCH_SIDES_REQUEST,
});

export const fetchSidesSuccess = (sides: Side[]): SidesActionTypes => ({
  type: FETCH_SIDES_SUCCESS,
  payload: sides,
});

export const fetchSidesFailure = (error: string): SidesActionTypes => ({
  type: FETCH_SIDES_FAILURE,
  error,
});

export const fetchSidesData = (): AppThunk => async (dispatch, getState) => {
  dispatch({ type: FETCH_SIDES_REQUEST });
  try {
    const sideData: any[] = await getSides();
    dispatch(fetchSidesSuccess(sideData));
  } catch (error) {
    dispatch({ type: FETCH_SIDES_FAILURE, error: error.message });
  }
};
