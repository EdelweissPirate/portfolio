import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'

function App() {
  return (
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </Router>
  )
}

export default App
