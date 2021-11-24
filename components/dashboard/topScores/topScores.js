import classes from '../../../styles/scores.module.css'
import { useContext } from "react";
import { DataContext } from "../../../dataContext/dataContext";
let bestPlayers;
const TopScores = () => {
    const {state,dispatch} = useContext(DataContext);
    let bestPlayers = [...state.sortUsers].splice(0,3)

    return ( 
        <div className='bg-blue-400 h-1/3 p-2'>
            <strong>Highest Scores:</strong>
            <ul className={`${classes.scores} w-64 pb-8  m-auto rounded-lg`}>
                {bestPlayers?.map((player,index) => {
                    return  <li key={index} className='flex flex-row justify-between m-1 p-2 rounded-md'>
                                <h1>{index+1}- {player.name}</h1>  
                                <strong>{player.score}</strong>
                            </li>
                })}
            </ul>
        </div>
     );
}
 
export default TopScores;