import { NavBar, TerritoryMarker } from '@/components';
import Image from 'next/image';
import TerritoriesBg from '../../../public/assets/territories-bg.svg';
import TerritoriesMap from '../../../public/assets/territories-map.svg';
import TerritoryOwnerImg from '../../../public/assets/territory-owner-img.svg';

export default function Territories() {

  return (
    <>
      <NavBar active='territories' />
      <div className='flex w-full h-full justify-center items-center' style={{ backgroundImage: `url(${TerritoriesBg.src})`, backgroundRepeat: 'no-repeat' }}>
        <div className='w-1/2 h-96 p-8' style={{ backgroundImage: `url(${TerritoriesMap.src})`, backgroundRepeat: 'no-repeat' }}>
          <TerritoryMarker territoryOwnerImg={TerritoryOwnerImg}/>
          <TerritoryMarker territoryOwnerImg={TerritoryOwnerImg}/>
          <TerritoryMarker territoryOwnerImg={TerritoryOwnerImg}/>
        </div>
      </div>
    </>
  );
}
