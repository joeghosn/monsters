import { Route, Routes } from "react-router-dom";
import { CategoryCard } from "../../components";
import { Category } from "../../components";

const CATEGORIES=["pokemon", "bakugan", "dragon-ball"];

const Directory=()=>{
    return <div>
    {CATEGORIES.map((category)=><CategoryCard key={category} name={category}/>)}
</div>
}

export const Monsters=()=>{
    return <Routes>
        <Route index element={<Directory/>}/>
        <Route path=":category" element={<Category/>}/>
        {/* Exercice */}
    </Routes>
}