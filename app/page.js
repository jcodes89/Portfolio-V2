// import Image from "next/image";

import HeroMain from './components/Hero/HeroMain';
import HeroSub from './components/Hero/HeroSub';

export default function Home() {
  return (
    <>
    <main className='h-screen w-full absolute'>
      <HeroMain/>
      <HeroSub/>
    </main>
    </>
  );
}
