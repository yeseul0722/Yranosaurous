import { useReducer } from 'react';

interface State {
  placeName: string;
  selectedMarker: string;
  details: string;
  placeType: string;
  image: File | null;
}

const initialState: State = {
  placeName: '',
  selectedMarker: '',
  details: '',
  placeType: '편의 시설',
  image: null,
};

type Action =
  | { type: 'SET_PLACE_NAME'; payload: string }
  | { type: 'SET_SELECTED_MARKER'; payload: string }
  | { type: 'SET_DETAILS'; payload: string }
  | { type: 'SET_PLACE_TYPE'; payload: string }
  | { type: 'SET_IMAGE'; payload: File | null };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PLACE_NAME':
      return { ...state, placeName: action.payload };
    case 'SET_SELECTED_MARKER':
      return { ...state, selectedMarker: action.payload };
    case 'SET_DETAILS':
      return { ...state, details: action.payload };
    case 'SET_PLACE_TYPE':
      return { ...state, placeType: action.payload };
    case 'SET_IMAGE':
      return { ...state, image: action.payload };
    default:
      return state;
  }
};

const usePlaceHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export default usePlaceHook;
