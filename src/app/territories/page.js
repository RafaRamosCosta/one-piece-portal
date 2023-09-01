import { NavBar } from '@/components';
import Image from 'next/image';
import TerritoriesBg from '../../../public/assets/territories-bg.svg';
import TerritoriesMap from '../../../public/assets/territories-map.svg';

export default function Territories() {

  return (
    <>
      <NavBar />
      <div className='flex w-full h-full justify-center items-center' style={{ backgroundImage: `url(${TerritoriesBg.src})`, backgroundRepeat: 'no-repeat' }}>
        <div>
          <Image src={TerritoriesMap} alt='territories map'/>
        </div>
      </div>
    </>
  );
}
