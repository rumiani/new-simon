const signInHandler = ()=>{
    // setCorrectPass(false)
    let name =document.getElementById('name').value
    let pass =document.getElementById('pass').value
    for(let i of props.users){
        if(i.name.toUpperCase()===name.toUpperCase()){
            //user exist and sings in
            // console.log(i.pass);
        if(i.pass==pass){ //input:text
            props.gameMenuHandler(name)
            setUserExist(true)
            setCorrectPass(true)
            return;
        }
        // wrong password
        else{
            setUserExist(true)
            setCorrectPass(false)
            return;
        }
    }
    // user doesn't exist
    else{
        setUserExist(false)
        setCorrectPass(true)
        // return;
    }
}
}

