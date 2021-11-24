import Score from "./score/score";
import ScoresBtn from "./scoresBtn/scoresBtn";
import SoundBtn from "./soundBtn/soundBtn";
import { useContext} from "react";
import GuestBtn from "./guestBtn/guestBtn";
import SignInBtn from "./signInBtn/signInBtn";
import SignOutBtn from "./signOutBtn/signOutBtn";
import { DataContext } from "../../dataContext/dataContext";
const Menu = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
            <div className='flex flex-col  w-full h-1/6 bg-gray-500'>    
                    <Score/>
                    <div className='flex flex-row justify-around'>
                        {state.dashboard ? <GuestBtn/>: state.signIned? <SignOutBtn/>: <SignInBtn/>}
                        <SoundBtn/>
                        <ScoresBtn/>
                    </div>    
            </div>
     );
}
export default Menu;


// import './Menu.css'
// const Menu = (props) => {
//     return ( 
//         <div className='menu' style={{display:props.menu?'block':'none'}}>      
//                 <p>The sound is <strong>{props.muteMode?'OFF':'ON'}</strong></p>
//                 <button className='backToPlay' onClick={props.getBackHandler}>Go to play</button>
//                 <button className='muteMode' onClick={props.muteModeHandler}>
//                     {props.muteMode?'Sound Mode':'Mute mode'}
//                 </button>
//                 {props.serverData?
//                     (props.guest?<button className='logIn' onClick={props.logInHandler}>Log in</button>:
//                     <button className='logout' onClick={props.logOutHandler}>Log out</button>):null
//                 }
//                         <p className='tip'><strong>Tip:</strong> Hit the play button and let the device choose a color, then Repeat the color sequence. It starts from one color and every level the device will add one more color. </p>
//         </div>
//      );
// }
 
// export default Menu;