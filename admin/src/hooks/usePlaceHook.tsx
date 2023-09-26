import { useReducer } from 'react';

interface State {
  placeName: string;
  selectedMarker: string;
  details: string;
  placeType: string;
  imageURL: string;
  imagePreviewUrl: string;
}

const initialState: State = {
  placeName: '',
  selectedMarker: '',
  details: '',
  placeType: '',
  imageURL: '',
  imagePreviewUrl: '',
};

type Action =
  | { type: 'SET_PLACE_NAME'; payload: string }
  | { type: 'SET_SELECTED_MARKER'; payload: string }
  | { type: 'SET_DETAILS'; payload: string }
  | { type: 'SET_PLACE_TYPE'; payload: string }
  | { type: 'SET_IMAGE_URL'; payload: string }
  | { type: 'SET_IMAGE_PREVIEW_URL'; payload: string };

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
    case 'SET_IMAGE_URL':
      return { ...state, imageURL: action.payload };
    case 'SET_IMAGE_PREVIEW_URL':
      return { ...state, imagePreviewUrl: action.payload };
    default:
      return state;
  }
};

const usePlaceHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export default usePlaceHook;
