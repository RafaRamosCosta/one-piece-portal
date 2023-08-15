import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/assets/logo.svg';
import ProfilePicture from '../../public/assets/profile.svg';


const NavLink = ({ href, text, isActive }) => (
  <Link href={href} className={`text-2xl ${isActive ? 'text-highlightBlue underline' : ''}`}>
    {text}
  </Link>
);

export const NavBar = ({ active }) => {
  return (
    <nav className="bg-zinc-900 py-4">
      <ul id="links" className="flex gap-80 justify-center items-center">
        <Link href='/' ><Image src={Logo} alt="logo" /></Link>
        <ul className="flex gap-8">
          <li>
            <NavLink href='/crews' text="Tripulações" isActive={active === 'crews'}/>
          </li>
          <li>
            <NavLink href='/pirates' text="Piratas" isActive={active === 'pirates'}/>
          </li>
          <li>
            <NavLink href='/ships' text="Navios" isActive={active === 'ships'}/>
          </li>
          <li>
            <NavLink href='/territories' text="Territórios" isActive={active === 'territories'}/>
          </li>
        </ul>
        <li>
          <a href="/#">
            <Image src={ProfilePicture} alt="profile picture" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
