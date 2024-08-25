
import './App.css'
import Header from './components/Header/Header'
import WeatherBoad from './components/WeatherBoard/WeatherBoad'

function App() {

  return (
    <div className='grid place-items-center h-screen'>
      <Header></Header>
      <main>
        <section>
          <WeatherBoad></WeatherBoad>
        </section>
      </main>
    </div>
  )
}

export default App
