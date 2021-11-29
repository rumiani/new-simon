export const postHandler= ({state,dispatch})=>{
    let highestScore=null
    let userId;
     if(state.signedIn){

      for(let i in state.result){
         if( state.result[i].name === state.username ){
           highestScore = state.score > state.result[i].score? state.score: state.result[i].score;
           userId=i;

           fetch(`https://highestscores-7983d-default-rtdb.firebaseio.com/users/${userId}/score.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(highestScore)      
        })
    }}
    }
}