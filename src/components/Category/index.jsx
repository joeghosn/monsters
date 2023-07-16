import { useParams } from "react-router-dom"

export const Category=({items})=>{
const {category}= useParams();
return <div>{category} category</div>

}