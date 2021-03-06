import * as t from '../dataContext/types'
import { checkAuthHandler } from './checkAuthHandler'
const url = 'https://highestscores-7983d-default-rtdb.firebaseio.com/users.json'
export const fetchData = ({dispatch})=>{

    dispatch({type:t.DATA,payload:false})
    dispatch({type:t.LOADING,payload:true})
    fetch(url)
    .then(res => res.json() )
    .then(result=>{
        let users = Object.values(result)
        let sortUsers = [...users].sort((a,b)=>b.score-a.score)
        // this.setState({objectData:data,users:users,sortUsers:sortUsers,numberOftimes:users.length})
        // console.log(Object.entries(users))
        dispatch({type:t.SORTUSERS,payload:sortUsers})
        dispatch({type:t.RESULT,payload:result})
        dispatch({type:t.DATA,payload:true})
        dispatch({type:t.LOADING,payload:false})
        checkAuthHandler(sortUsers,{dispatch})
        })
      .catch ((e)=> {
        console.log(e);
        dispatch({type:t.ERROR})
        dispatch({type:t.LOADING,payload:false})
    })
}