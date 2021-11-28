import { useContext } from "react";
import { DataContext } from "../../../dataContext/dataContext";
import GoToPlayBtn from "./goToPlayBtn/goToPlayBtn"
import SignOutBtn from "./signOutBtn/signOutBtn";

const Welcome = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
        <div className=' w-full h-full p-16 flex flex-col text-center'>
                <h1>Hi <strong>{state.username}</strong>!</h1>
            <p className='m-8 text-xl'>
                &nbsp;Welcome to Simon. <br />
                </p>
        <GoToPlayBtn/>
        <SignOutBtn/>
        </div>
     );
}
 
export default Welcome;