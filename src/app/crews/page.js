import { CrewCard } from '@/components/CrewCard';
import { NavBar } from '@/components/NavBar';

export default async function Crews() {
  const response = await fetch('http://localhost:8080/crews/all');

  const crews = await response.json();

  return (
    <>
      <NavBar active="crews"/>
      <div>
        {crews.data.map((crew) => <CrewCard key={crew.id} crew={crew} />)}
      </div>
    </>
  );
}
