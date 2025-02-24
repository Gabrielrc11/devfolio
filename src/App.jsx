import './App.css'
import Header from './components/header/header.jsx'

function App() {
  return (
    <div className='App'>
      <div>
        <Header texts={["Sobre mim", "Experiências", "Habilidades", "Formação", "Projetos"]}/>
      </div>
    </div>
  )
}

export default App