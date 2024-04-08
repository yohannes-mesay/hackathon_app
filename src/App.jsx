import { LeftNav } from './components/LeftNav'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import SingleProduct from './components/ui/SingleProduct'
import SingleService from "./components/ui/SingleService";
import Saved from './pages/Saved'
import SingleEvent from "./components/ui/SingleEvent";


function App() {
  return (
    <div className='App flex'>
      <Router>
        <div className="h-screen" style={{width: "200px"}}>
          <LeftNav/>
        </div>
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path='/'/>
            <Route path='/Products'/>
            <Route path='/Services'/>
            <Route path='/Events'/>
            <Route path='/Saved' element={<Saved />} />
            <Route path='/Create'/>
            <Route path='/Products/details/:id' element={<SingleProduct/>}/>
            <Route path={'/Services/details/:id'} element={<SingleService/>}/>
            <Route path={'/Events/details/:id'} element={<SingleEvent/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
