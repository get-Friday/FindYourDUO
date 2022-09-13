import './styles/main.css'
import logoImg from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <main className='max-w-[1344px] mx-auto flex flex-col items-center'>
      <div className='my-20'>
        <img src={logoImg} />
      </div>
      <h1 className='text-6xl text-white font-black'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
      </div>
      
    </main>
  )
}

export default App
