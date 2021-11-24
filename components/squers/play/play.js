import { useContext } from "react";
import { DataContext } from "../../../dataContext/dataContext";
import { playFunc } from "../playFunc/playFunc";

const Play = () => {
  const {state,dispatch} = useContext(DataContext);

    return ( 
            <button className='play' onClick = {() => playFunc({state, dispatch})}>
              Play
            </button>
     );
}
 
export default Play;
// import './Play.css'
// const Play = (props) => {
//     return ( 
//         <div>
//             <button className='play' 
//         style={props.gameover?{display:'none'}:{display:'block'}}
//         onClick={props.playHandler}>
//           <h2>{props.play?'Restart':'Play'}</h2> 
//         {(props.play)?(props.myTurn?'Your turn':'PC turn'):''} 
//         </button>
//         <div className='score' style={!props.appInfo||props.gameover?{display:'block'}:{display:'none'}}>
//           <p>Score: {props.score}</p>
//           <button className='dashboardBtn' onClick={props.menuHandler}>Menu</button></div>
//           </div>
//      );
// }
 
// export default Play;