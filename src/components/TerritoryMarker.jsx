import Image from 'next/image';

export const TerritoryMarker = ({ territoryOwnerImg, top, bottom, left, right }) => {
  return (
    <div className='absolute'>
      <Image src={territoryOwnerImg} alt="territory owner image" />
    </div>
  );
};
