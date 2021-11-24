import { useContext, useEffect } from "react";
import { DataContext } from "../../dataContext/dataContext";
import { fetchData } from "../../fetchData/fetchData";
import Form from "./form/form";
import TopScores from "./topScores/topScores";
import Loading from '../../components/loading/loading'
import ErrorFetch from '../../components/errorFetch/errorFetch'
const Dashboard = () => {
    const {state,dispatch} = useContext(DataContext);

    useEffect(() => {      
        fetchData(dispatch)
    },[])
    return ( 
        <div className='xl:w-96 w-full h-5/6 flex flex-col relative'>
            {state.loading && <Loading/>}
            {state.error && <ErrorFetch/>}
            {state.data && <TopScores/> }
            {state.data && <Form/> }
            
        </div>
     );
}
 
export default Dashboard;