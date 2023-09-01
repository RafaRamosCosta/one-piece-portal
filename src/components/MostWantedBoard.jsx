import luffyImg from '../../public/assets/luffy.svg';
import wantedWallBg from '../../public/assets/wanted-wall.svg';
import { WantedCard } from './WantedCard';

const getMostWanted = async () => (
  [
    { name: 'Monkey D. Luffy', reward: 1000, imageUrl: luffyImg },
    { name: 'Monkey D. Luffy', reward: 1000, imageUrl: luffyImg },
    { name: 'Monkey D. Luffy', reward: 1000, imageUrl: luffyImg },
    { name: 'Monkey D. Luffy', reward: 1000, imageUrl: luffyImg },
    { name: 'Monkey D. Luffy', reward: 1000, imageUrl: luffyImg },
  ]
);

export const MostWantedBoard = async () => {
  const mostWanted = await getMostWanted();

  return (
    <aside className="flex flex-wrap justify-center gap-4 w-1/4 max-h-screen p-4 ml-16 mt-16" style={{ backgroundImage: `url(${wantedWallBg.src})` }}>
      <p className="text-center text-2xl font-wanted font-extrabold text-yellow-950 w-full">OS MAIS PROCURADOS</p>
      {
        mostWanted.map(({ name, reward, imageUrl }, idx) => (
          <WantedCard name={name} reward={reward} imageUrl={imageUrl} key={idx} />
        ))
      }

    </aside>

  );
};