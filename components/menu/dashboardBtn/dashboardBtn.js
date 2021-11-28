import * as t from '../../../dataContext/types'
import { useContext } from "react";
import { DataContext } from "../../../dataContext/dataContext";

const DashboardBtn = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
        <span className='btn bg-blue-600 ' title='Play as a guest' 
            onClick={() => dispatch({type:t.DASHBOARD,payload:true})}>
            Dashboard
        </span>
     );
}
 
export default DashboardBtn;