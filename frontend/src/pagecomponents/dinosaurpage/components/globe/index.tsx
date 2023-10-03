import React, { useRef, useEffect, useState, useCallback } from 'react';
import Globe from 'react-globe.gl';
import useDinosaurStore from '../../../../stores/dinosaur/useDinosaurStore';
import { useDinosaurSubHook } from '../../../../hooks/dinosaur/useDinosaurSubHook';
import AnimalDetail from '../animaldetail';
import { StyledAnimalWindow, StyledGlobePage } from './Globe.styled';
import { useDinosaurDetailHook } from '../../../../hooks/dinosaur/useDinosaurDetailHook';

const CustomGlobeComponent = (props: any) => {
  // 기본설정
  const globeEl = useRef<any>();
  // 주스턴드3. 주스턴드 호출
  const DsEngName = useDinosaurStore((state: any) => state.DsEngName);

  // 좌표 넣기
  const { isLat, isLng, dinosaurSubList, getDinosaurSubList, isCountry } = useDinosaurSubHook(); // 공룡 서브

  useEffect(() => {
    if (DsEngName) {
      getDinosaurSubList(DsEngName);
    }

    // console.log('country', isCountry);
  }, [DsEngName]);

  const [appearLat, setAppearLat] = useState<number>();
  const [appearLng, setAppearLng] = useState<number>();

  useEffect(() => {
    const numLat = parseFloat(isLat[0]);
    const numLng = parseFloat(isLng[0]);
    setAppearLat(numLat);
    setAppearLng(numLng);

    // 공룡 선택시 카메라 초점 변경
    if (globeEl.current && numLat && numLng) {
      // 값이 없으면 지구본 사라짐
      globeEl.current.pointOfView({ lat: numLat, lng: numLng, altitude: 1.5 }, 0);
    }
  }, [isLat, isLng, globeEl]);

  // 공룡 위치 좌표등록
  const location = {
    lat: appearLat,
    lng: appearLng,
    label: DsEngName,
  };

  useEffect(() => {
    // 자동 회전
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;

    const MAP_CENTER = { altitude: 2 };
    globeEl.current.pointOfView(MAP_CENTER, 0);
  });

  // 동물 비교
  // 공룡 한국이름, 공룡 한국어 지역(detail) : Animaldetail에서

  // 공룡 영어 지역(subData) : 여기에서

  // 동물 창 띄우기
  const [isAnimalOpen, setIsAnimalOpen] = useState(false);

  const openAnimal = () => {
    setIsAnimalOpen(!isAnimalOpen);
  };

  const closeAnimal = () => {
    setIsAnimalOpen(false);
  };

  return (
    <StyledGlobePage>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        backgroundColor="#000020"
        pointRadius={10}
        labelsData={[location]}
        labelText={'label'}
        labelSize={1.6}
        labelColor={useCallback(() => 'white', [])}
        labelDotRadius={0.5}
        labelAltitude={0.05}
        onLabelClick={openAnimal}
      />
      <StyledAnimalWindow>
        {isAnimalOpen && <AnimalDetail isAnimalOpen={isAnimalOpen} isCountry={isCountry} closeAnimal={closeAnimal} />}
      </StyledAnimalWindow>
    </StyledGlobePage>
  );
};

export default CustomGlobeComponent;
