import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const DsFirstPage = () => {
  const globeEl = useRef<any>();

  useEffect(() => {
    // 자동 회전
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.4;
  });

  return (
    <Globe
      ref={globeEl}
      width={1000}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      backgroundColor="#000020"
      pointRadius={10}
    />
  );
};

export default DsFirstPage;
