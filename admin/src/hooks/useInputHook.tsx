import { useState } from 'react';

const useInputHook = () => {
  const [placeName, setPlaceName] = useState('');
  const [selectedMarker, setSelectedMarker] = useState('');
  const [details, setDetails] = useState('');
  const [placeType, setPlaceType] = useState('편의 시설');
  const [image, setImage] = useState<File | null>(null);

  return {
    placeName,
    setPlaceName,
    selectedMarker,
    setSelectedMarker,
    details,
    setDetails,
    placeType,
    setPlaceType,
    image,
    setImage,
  };
};

export default useInputHook;
