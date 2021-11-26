export const signUpHandler = (e,{state,dispatch})=>{
    e.preventDefault()
    let valide = state.nameExist || state.nameError || state.passLengthError || state.matchPassError;
    console.log(valide);
    if(state.nameExist) return console.log('state.nameExist: ',state.nameExist);
    if(state.nameError) return console.log('state.nameError: ',state.nameError);
    if(state.passLengthError) return console.log('state.passLengthError: ',state.passLengthError);
    if(state.matchPassError) return console.log('state.matchPassError: ',state.matchPassError);

    // if(repeatPass===pass&&passCheck && matchPassCheck && nameExistCheck===false&&!nameCheck){
    //     // props.menuHandler()
    //     fetch('https://highestscores-7983d-default-rtdb.firebaseio.com/users.json', {
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({name:name,score:0,pass:pass})      
    //     })
    //     props.gameMenuHandler(name)
    //     props.informationHandler()
    //     // console.log('post');
    //     return;
    // }  
}