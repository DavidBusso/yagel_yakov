import { useState ,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './component/Home/Home'
import SearcherByRabbi from './component/Searchers/SearcherByRabbi';
import SearcherByTime from './component/Searchers/SearcherByTime';
import CurrentRabbi from './component/Searchers/CurrentRabbi';
import CurrentTime from './component/Searchers/CurrentTime';
import CurrentSong from './component/songs/CurrentSong';
import AllCurrentCategory from './component/songs/AllCurrentSongs';
import HeadeContext from './component/headeLine/HeadeContext'
// import { HiMoon } from "react-icons/hi2";


function App() {
  // const [count, setCount] = useState(0);
  const [isNightMode, setIsNightMode] = useState(false);
  const [size, setSize] = useState(16);
  useEffect(() => {
    const body = document.querySelector('body');
    if (isNightMode) {
      body.classList.add('night-mode');
    } else {
      body.classList.remove('night-mode');
    }
  }, [isNightMode]);
  return (
    <>
      <div >
        <HeadeContext.Provider value={{ isNightMode, setIsNightMode ,size, setSize}}>


          <BrowserRouter>


            <Routes>


              <Route path="/" element={<Home />} />
              <Route path={`/yagelyakov/searcherbyrabbi`} element={<SearcherByRabbi />} ></Route>
              <Route path={`/yagelyakov/searcherbytime`} element={<SearcherByTime />} ></Route>

              <Route path={`/yagelyakov/searcherbyrabbi/:rabbi`} element={<CurrentRabbi />} ></Route>
              <Route path={`/yagelyakov/searcherbytime/:rabbi`} element={<CurrentTime />} ></Route>
              <Route path={`/searcher/:currentSearch/:rabbi/:song`} element={<CurrentSong />} ></Route>
              <Route path={`/searcher/:currentSearch/allCategory/:rabbi`} element={<AllCurrentCategory />} ></Route>

            </Routes>


          </BrowserRouter>

        </HeadeContext.Provider>
      </div>

    </>
  )
}

export default App
