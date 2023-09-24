import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import useDinosaurStore from '../../../../stores/dinosaur/useDinosaurStore';
import { useDinosaurSubHook } from '../../../../hooks/dinosaur/useDinosaurSubHook';

const CustomGlobeComponent = (props: any) => {
  const { getDinosaurSub } = useDinosaurSubHook();
  // console.log('공룡추가정보', dinosaurSub);
  const globeEl = useRef<any>();

  const DsEngName = useDinosaurStore((state: any) => state.DsEngName);
  const dinosaurSub = useDinosaurStore((state: any) => state.dinosaurSub);

  useEffect(() => {
    console.log(dinosaurSub);
  }, [dinosaurSub]);

  useEffect(() => {
    // 자동 회전
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.4;

    const MAP_CENTER = { altitude: 2 };
    globeEl.current.pointOfView(MAP_CENTER, 0);
  });

  return (
    <Globe
      ref={globeEl}
      // width={1000}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      backgroundColor="#000020"
      pointRadius={10}
    />
  );
};

export default CustomGlobeComponent;
