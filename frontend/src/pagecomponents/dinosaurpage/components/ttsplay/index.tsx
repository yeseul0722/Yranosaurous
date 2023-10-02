import React, { useState, useRef } from 'react';
import { StyledTtsBox, StyledTtsAudio } from './TtsPlay.styled';

const TtsPaly = ({ src }: { src: string }) => {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlay) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlay(!isPlay);
    }
  };
  return (
    <StyledTtsBox onClick={togglePlay}>
      {isPlay ? '■' : '▶'}
      <StyledTtsAudio ref={audioRef} src={src} />
    </StyledTtsBox>
  );
};

export default TtsPaly;
