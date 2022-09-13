import './styles/main.css'
import logoImg from './assets/Logo.svg'

function App() {
  return (
    <main className='max-w-[1344px] mx-auto flex flex-col items-center'>
      <div className='my-20'>
        <img src={logoImg} />
      </div>
      <h1 className='text-6xl text-white font-black'>Seu duo está aqui.</h1>
    </main>
  )
}

export default App
