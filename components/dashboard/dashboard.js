import { useContext, useEffect } from "react";
import { DataContext } from "../../dataContext/dataContext";
import { fetchData } from "../../fetchData/fetchData";
import Form from "./form/form";
import TopScores from "./topScores/topScores";
import Loading from '../../components/loading/loading'
import ErrorFetch from '../../components/errorFetch/errorFetch'
import Welcome from "./welcome/welcome";
const Dashboard = () => {
    const {state,dispatch} = useContext(DataContext);

    useEffect(() => {      
        fetchData({dispatch})
    },[])
    return ( 
        <div className='bg-blue-400 w-full h-5/6 flex flex-col relative'>
            {state.loading && <Loading/>}
            {state.error && <ErrorFetch/>}
            {state.data && <TopScores/> }
            {state.data && !state.signedIn && <Form/> }
            {state.signedIn && <Welcome/>}
        </div>
     );
}
 
export default Dashboard;