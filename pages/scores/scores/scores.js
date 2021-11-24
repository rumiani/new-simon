import classes from '../../../styles/scores.module.css'
import { useContext } from "react";
import { DataContext } from "../../../dataContext/dataContext";

const Scores = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
             <ul className={`${classes.scores} overflow-y-auto my-8 h-96 rounded-xl`}>
                {state.sortUsers.map((user,index) =>{
                    return  <li key={index} className='flex justify-between py-2 px-8 hover:font-bold duration-500'>
                                <h2>{index+1}- {user.name}</h2>
                                <strong>
                                  {user.score}
                                </strong>
                            </li>
                })}
            </ul>
            
            
     );
}
 
export default Scores;