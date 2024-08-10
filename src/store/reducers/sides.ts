import {
  FETCH_SIDES_REQUEST,
  FETCH_SIDES_SUCCESS,
  FETCH_SIDES_FAILURE,
  SidesActionTypes,
} from '../actions/sides';

interface Player {
  name: string;
  indx: number;
  tee: string;
}

interface SideOption {
  side: string;
  action: number;
}

export interface Side {
  id: number;
  date: string;
  betType: string;
  players: Player[];
  score: number;
  action: null | number;
  sides: SideOption[];
  prop: string;
}

interface SidesState {
  loading: boolean;
  data: Side[];
  error: string | undefined;
}

const initialState: SidesState = {
  loading: false,
  data: [],
  error: null,
};

export default function sides(
  state = initialState,
  action: SidesActionTypes
): SidesState {
  switch (action.type) {
    case FETCH_SIDES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SIDES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_SIDES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
