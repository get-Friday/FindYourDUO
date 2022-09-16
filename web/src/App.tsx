import './styles/main.css'
import logoImg from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CreateAdModal'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <main className='max-w-[1344px] mx-auto flex flex-col items-center'>
      <div className='my-20'>
        <img src={logoImg} />
      </div>
      <h1 className='text-6xl text-white font-black'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner 
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </main>
  )
}

export default App
