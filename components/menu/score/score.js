import { useContext } from "react";
import { DataContext } from "../../../dataContext/dataContext";
const Score = () => {
    const {state} = useContext(DataContext);
    
    return ( 
        <span className='p-2 text-xl w-full h-12 font-bold'>
            {state.score>0 && state.play && 'score : ' + state.score }
        </span>
     );
}
 
export default Score;