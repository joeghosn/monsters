// import { Route, Routes } from 'react-router-dom';
// import { Home, Monsters, AboutUs } from './screens';
import { Navigation } from './components';

import MONSTERS from './data/monsters.mock.json';




const App=()=> {

  return (
    <>
    <Navigation/>
    {MONSTERS.map((monster)=>{
      const {id, name, email}= monster;
      return (<Card key={id} id={id } name={name} email={email} />)
  })}
  </>

    // <Routes>
    //   <Route path='/' element={<Navigation/>}>
    //     <Route index element={<Home/>}/>
    //     <Route path='monsters/*' element={<Monsters/>}/>
    //     <Route path='about-us' element={<AboutUs/>}/>
    //   </Route>
    // </Routes>
  );
}


export default App;
