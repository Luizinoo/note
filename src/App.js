import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Task from './components/pages/Task'
import Newtask from './components/pages/Newtask'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
// import Footer from './components/layout/Footer'
import Tasks from './components/pages/Tasks'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='minHeight'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Task' element={<Task />} />
          <Route exact path='/Newtask' element={<Newtask />} />
          <Route path='/Task/:id' element={<Tasks />} />
        </Routes>
      </Container>
      {/* <Footer /> */}
    </Router>
  )
}

export default App