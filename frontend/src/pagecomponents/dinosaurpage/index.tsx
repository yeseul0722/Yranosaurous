import React, { useState } from 'react';
import CustomGlobe from './components/globe';
import DinosaurList from './components/dinosaurlist';
import Sidebar from './components/sidebar';
import { CustomGlobeContainer, SidebarContainer, DinosaurListContainer, DinosaurPage } from './Dinosaur.styled';

const Dinosaur = () => {
  const [isOpenList, setIsOpenList] = useState(true);
  return (
    <DinosaurPage>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <CustomGlobeContainer>
        <CustomGlobe />
      </CustomGlobeContainer>

      {isOpenList && (
        <DinosaurListContainer>
          <DinosaurList />
        </DinosaurListContainer>
      )}
    </DinosaurPage>
  );
};

export default Dinosaur;
