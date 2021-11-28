import { useContext } from 'react';
import * as d from '../../data/data'
import { DataContext } from '../../dataContext/dataContext';
import Gameover from './gameoverold/gameover';
import Play from "./play/play"
import { userPlayFunc } from './userPlayFunc/userPlayFunc'

const Squers = () => {
  const {state,dispatch} = useContext(DataContext);

  return ( 
        <div className='w-full h-5/6 flex flex-wrap relative'>
          {d.colors.map( (color,index) => {
            return <span key={index} className={` ${color} w-1/2 h-1/2 cursor-pointer`}
            onClick={(e) => userPlayFunc(e,{state,dispatch}) } id={index}
            ></span>
          })}     
          <Play/>      
          {state.gameOver && <Gameover/>}
        </div>
     );
}
 

export default Squers;

// const Squers = (props) => {
//     return ( 
//         <div>
//             <div className="firstRow">
//             <div className='items itemOne' id={props.divId[0]}    onClick={props.click} >
//             </div>
//             <div className='items itemTwo' id={props.divId[1]}  onClick={props.click}>         
//             </div>
//           </div> 
//           <div className="secondRow">
//             <div className='items itemThree' id={props.divId[2]}  onClick={props.click}  >        
//             </div>
//             <div className='items itemFour' id={props.divId[3]} onClick={props.click} >        
//             </div>
//           </div>
//         </div>
//      );
// }
 

// export default Squers;