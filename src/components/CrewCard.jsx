import Image from 'next/image';

export const CrewCard = ({ crew }) => {
  return (
    <div>
      <p>{crew.name}</p>
      <p>{crew.flagDescription}</p>
    </div>
  );
};
