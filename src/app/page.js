import { MostWantedBoard, NavBar } from '@/components';
import HomeBg from '../../public/assets/home-bg.svg';

export default function Home() {

  return (
    <>
      <NavBar />
      <div className='w-full h-full' style={{ backgroundImage: `url(${HomeBg.src})`, backgroundRepeat: 'no-repeat' }}>
        <MostWantedBoard />
      </div>
    </>
  );
}
