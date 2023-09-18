import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUtensils, faHouseUser, faSuitcase } from '@fortawesome/free-solid-svg-icons';

const GosungSideBar: React.FC = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div>
        <FontAwesomeIcon icon={faUtensils} />
      </div>
      <div>
        <FontAwesomeIcon icon={faHouseUser} />
      </div>
      <div>
        <FontAwesomeIcon icon={faSuitcase} />
      </div>
    </div>
  );
};

export default GosungSideBar;
