import fetchData from '../../../fetchData/fetchData'
const logOutHandler= ()=>{
    fetchData()
    dispatch({})
    localStorage.clear();
  }