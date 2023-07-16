import { Card } from "../../components"
import MONSTERS from '../../data/monsters.mock.json'

export const Home=()=>{
    return <div>
        {MONSTERS.map((monster)=>{
            const {id, name, email}= monster;
            return (<Card key={id} id={id } name={name} email={email} />)
        })}
    </div>
}

