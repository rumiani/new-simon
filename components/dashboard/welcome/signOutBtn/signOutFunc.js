import * as t from '../../../../dataContext/types'
export const signOutFunc = ({dispatch}) => {
    localStorage.clear()
    dispatch({type:t.SIGNEDIN,payload:false})
}