import { Route, Routes } from 'react-router-dom';
import { Home, Monsters, AboutUs } from './screens';
import { Navigation } from './components';

const App=()=> {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='monsters/*' element={<Monsters/>}/>
        <Route path='about-us' element={<AboutUs/>}/>
      </Route>
    </Routes>
  );
}


export default App;
