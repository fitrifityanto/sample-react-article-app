
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import TablePage from './components/pages/TablePage'
import FormCreatePage from './components/pages/FormCreatePage'
import FormUpdatePage from './components/pages/FormUpdatePage'


function App() {
  return (
    <div>
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/table' element={<TablePage />} />
          <Route path='/create' element={<FormCreatePage />} />
          <Route path='/table/edit/:id' element={<FormUpdatePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
