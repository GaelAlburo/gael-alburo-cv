import ThreeLogo from './components/ThreeLogo'
import ScrollTrig from './components/ScrollTrig'
import './styles/App.css'

function App() {

  return (
    <>
      <ThreeLogo />
      <div className="name-div d-flex flex-row align-items-center justify-content-center">
        <h1 className='nombre display-1'>Gael</h1>
        <h2 className='apellido1 display-1'>Guzmán</h2>
        <h2 className='apellido2 display-1'>Alburo</h2>
      </div>
      <ScrollTrig />
    </>
  )
}

export default App