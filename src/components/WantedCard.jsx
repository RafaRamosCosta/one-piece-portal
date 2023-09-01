import Image from 'next/image';
import WantedCardBg from '../../public/assets/wanted-card-bg.png';

export const WantedCard = ({ name, reward, imageUrl }) => {
  return(
    <div className='flex flex-col justify-center items-center w-32 max-h-48'>
      <div className='flex flex-col w-32 h-48 justify-center items-center' style={{ backgroundImage:`url(${WantedCardBg.src})` }}>
        <Image src={imageUrl} alt={`${name} image`} className='relative top-6'/>
        <div className='pt-11'>
          <h2 className='font-wanted font-extrabold text-yellow-950 text-xs'>{name}</h2>
          <p className='font-wanted font-extrabold text-yellow-950 text-xs pl-2'>{reward}</p>
        </div>
      </div>
    </div>
  );
  
};