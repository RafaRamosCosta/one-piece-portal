import Image from 'next/image';

const getMostWanted = () => ([{ name: 'Luffy', reward: 1000, imageUrl: '' }, { name: 'Zoro', reward: 1000, imageUrl: '' }, { name: 'Nami', reward: 1000, imageUrl: '' }, { name: 'Usopp', reward: 1000, imageUrl: '' }, { name: 'Sanji', reward: 1000, imageUrl: '' }, { name: 'Chopper', reward: 1000, imageUrl: '' }, { name: 'Robin', reward: 1000, imageUrl: '' }, { name: 'Franky', reward: 1000, imageUrl: '' }, { name: 'Brook', reward: 1000, imageUrl: '' }, { name: 'Jinbe', reward: 1000, imageUrl: '' }]);

export const MostWantedBoard = () => {
  const mostWanted = getMostWanted();

  return (
    <aside className="flex flex-wrap justify-center py-12 gap-8 bg-orange-300 w-1/4">
      {
        mostWanted.map(({ name, reward, imageUrl }, idx) => (
          <div className=' bg-zinc-800' key={idx}>
            <Image src={imageUrl} alt={name} />
            <p>{name}</p>
            <p>Recompensa: {reward}</p>
          </div>
        ))
      }

    </aside>

  );
};