import { useNavigate } from "react-router-dom"

export const CategoryCard=({name="pokemon"})=>{
    const navigate=useNavigate();
    return (<div onClick={()=>navigate(name)}> Category {name}</div>)
}