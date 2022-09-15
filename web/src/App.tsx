import './styles/main.css'
import logoImg from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

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
        <GameBanner bannerUrl='/image1.png' title='League of Legends' adsCount={4}/>
        <GameBanner bannerUrl='/image2.png' title='Dota 2' adsCount={4}/>
        <GameBanner bannerUrl='/image3.png' title='CS:GO' adsCount={7}/>
        <GameBanner bannerUrl='/image4.png' title='Apex Legends' adsCount={4}/>
        <GameBanner bannerUrl='/image5.png' title='Fortnite' adsCount={2}/>
        <GameBanner bannerUrl='/image6.png' title='World of Warcraft' adsCount={11}/>
      </div>
      <CreateAdBanner />
    </main>
  )
}

export default App
