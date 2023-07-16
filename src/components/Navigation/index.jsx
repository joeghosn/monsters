 import { Outlet } from 'react-router-dom'
import './navigation.styles.css'

 export const Navigation=()=>{
    return(
        <>
           <nav className='nav'>
           <a href="/"><img className='nav-logo' src={process.env.PUBLIC_URL + '/assets/monster.jpg'} alt="Logo"></img></a>
                <ul className='nav-links-container'>
                    <li className='nav-link'><a href="/home">Home</a></li>
                    <li className='nav-link'><a href="/monsters">monsters</a></li>
                    <li className='nav-link'><a href="/about-us">About Us</a></li>
                </ul>
            </nav>
        <Outlet/>
        </>
    )
}


