import { useState } from 'react';
import './Form.css'
const Form = (props) => {
    const[signShow,setSignShow]=useState(true)
    const[nameCheck,setNameCheck]=useState(null)
    const[nameExistCheck,setNameExistCheck]=useState(null)
    const[passCheck,setPassCheck]=useState(null)
    const[matchPassCheck,setMatchPassCheck]=useState(null)
    const[userExist,setUserExist]=useState(true)
    const[correctPass,setCorrectPass]=useState(true)
    const[nameNull,setNameNull]=useState(true)
    const[passNull,setPassNull]=useState(true)
    
const signShowHandler = ()=>{
    setSignShow(!signShow);
    }

const checkNameHandler = (e)=>{
    // console.log(e);
    e.target.value===''?setNameNull(false):setNameNull(true)
    setNameCheck(true)
const re=/^[a-z A-Z 0-9]{3,10}$/i;
    if(re.test(e.target.value)){
        setNameCheck(false)
        setNameExistCheck(false)
        if(props.users!==null){
            for(let i of props.users){
                if(i.name.toUpperCase()===e.target.value.toUpperCase()){
                    setNameExistCheck(true)
                }
            }
        }
    }    
}
    const passHandler = (e)=>{
        e.target.value===''?setPassNull(false):setPassNull(true)
        setPassCheck(false)
        const re=/^[a-z A-Z 0-9]{4,10}$/i;
    if(re.test(e.target.value)){
        setPassCheck(true)
    }
    }
    const repeatPassHandler = (e)=>{
        const pass = document.getElementById('pass').value;
        setMatchPassCheck(pass===e.target.value?true:false)
    }

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

const createAccountHandler = ()=>{

    let name = document.getElementById('name').value.toUpperCase();
    let pass =document.getElementById('pass').value;
    let repeatPass =document.getElementById('repeatPass').value;
    for(let i of props.users){
        if(i.name.toUpperCase()===name){
            setNameExistCheck(true)
            return;
        }
    }
    if(repeatPass===pass&&passCheck && matchPassCheck && nameExistCheck===false&&!nameCheck){
        // props.menuHandler()
        fetch('https://highestscores-7983d-default-rtdb.firebaseio.com/users.json', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:name,score:0,pass:pass})      
        })
        props.gameMenuHandler(name)
        props.informationHandler()
        // console.log('post');
        return;
    }  
    if(!repeatPass===pass && nameExistCheck){
        matchPassCheck(false)
        return
    }
    if(pass===''||name===null){
        setCorrectPass(true)
        setNameNull(false)
    }  
   if(!passCheck){
       setPassCheck(false)
       return;
   }
}




    return ( 
        <div style={{display:props.formShow?'block':'none'}}>
        <div className='form' >
        <form  action='#' style={{display:props.serverData&&!props.isPending?'block':'none'}} >
            {signShow?<p><strong>Please sign in to record your score.</strong></p>:null}
            <div className='warn'>{correctPass===false?'Wrong password':null}
            {signShow&&userExist===false?"The username doesn't exist.":null}
            {!nameNull||!passNull?'Please enter your name and password':null}
            </div>
        <div className='inputName'>
          <input  type="text" placeholder='Name' id='name' onChange={checkNameHandler} />
          {!signShow?(nameCheck?<p className='warn'>Please enter 3-10 characters.</p>:
          nameExistCheck?<p className='warn'>Already exist.</p>:null):null
          }
          <input  type="password" id='pass' placeholder='Password' onChange={passHandler} />
          {!signShow&&passCheck===false?<p className='warn'>Please enter 4-10 characters.</p>:null}
          {signShow?null:
            <div>
                <input  type="password" id='repeatPass' placeholder='Repeat password' onChange={repeatPassHandler} />
                    {
                    passCheck?
                    (matchPassCheck?
                        <p className='warn' style={{color:'green'}}>Repeat password is matched.
                        </p>:
                        <p className='warn'>Repeat password doesn't match!</p>):
                    null
                    }
            </div>
          }
          {signShow?
            <button onClick={signInHandler}>Sign in</button>:
            <button onClick={createAccountHandler}>Create Account</button>
          }
              <br />
              {signShow?
              <a href='#' onClick={signShowHandler}>Create an account</a>:
              <p>Already have an account? <a href="#" onClick={signShowHandler}>Sign in</a></p>   
            }
        </div>
        </form>
        <br />
        {props.signShow&&props.serverData?null:<a href="#"  onClick={props.guestHandler}>Play as a guest</a>}
    </div> 
    </div>);
}
 
export default Form;