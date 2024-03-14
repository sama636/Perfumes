import Home from './Pages/Home/Home';
import { Route, Routes, BrowserRouter, Outlet} from "react-router-dom";
import MainHeader from './Components/MainHeader/MainHeader';
import { useRecoilState } from 'recoil';
import { $Current_Width } from './Store/atoms';
function App() {
  const [currentWidth , setCurrentWidth] = useRecoilState($Current_Width)
  window.addEventListener('resize', ()=>{
    setCurrentWidth(window.innerWidth);

  })

  return<>
     <BrowserRouter>
     <MainHeader/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Outlet/>
      </BrowserRouter>
      </>
}

export default App
