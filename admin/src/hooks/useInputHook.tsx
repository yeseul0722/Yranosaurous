import { useState } from 'react';

const useInputHook = () => {
  const [placeName, setPlaceName] = useState('');
  const [details, setDetails] = useState('');
  const [placeType, setPlaceType] = useState('');
  const [image, setImage] = useState<File | null>(null);

  return {
    placeName,
    setPlaceName,
    details,
    setDetails,
    placeType,
    setPlaceType,
    image,
    setImage,
  };
};

export default useInputHook;
