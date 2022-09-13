import React from 'react';
import './VerticalMenu.css';
import Icon from '../../../assets/iconsBarGraph/Icon';
import zen from '../../../assets/zen.svg';
import swimmer from '../../../assets/swimmer.svg';
import bike from '../../../assets/bike.svg';
import weight from '../../../assets/weight.svg';

const VerticalMenu = () => {
  return (
    <div className="VerticalMenu">
      <div className={'VerticalMenuNav'}>
        <div className={'icons'}>
          <Icon img={zen} />
          <Icon img={swimmer} />
          <Icon img={bike} />
          <Icon img={weight} />
        </div>
      </div>
      <div className={'VerticalMenuText'}>Copiryght, SportSee 2022</div>
    </div>
  );
};

export default VerticalMenu;
