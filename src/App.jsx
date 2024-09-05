import {Routes, Route}  from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Article' element={<Article/>}/>
      
    </Routes>
  )
}
export default App