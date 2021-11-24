let num;
let btn;
let i = 0;
   computerPlay=()=>{
      num = Math.floor(Math.random()*4)
      this.state.machineArr.push(num)
      this.setState({machineArr:this.state.machineArr,myTurn:false})
      i=0;
      setTimeout(() => {
        this.playArrAudio()
      }, 500);
  }
  playArrAudio=()=>{
    this.setState({play:true})
    let audio = new Audio()
    if(i<this.state.machineArr.length){
      audio.src=this.state.src[this.state.machineArr[i]]
      btn = document.getElementById(this.state.divId[this.state.machineArr[i]])
      audio.play();
      if(this.state.muteMode){audio.volume=0}
      btn.classList.add('down')
      setTimeout(() => {
        btn.classList.remove('down')
      }, 300);
      i =i+1;
    } 
    audio.addEventListener('ended', this.playArrAudio); 
      if(i===this.state.machineArr.length){
        this.setState({myTurn:true})
      }
  }            
  userPlay=(e)=>{
    num = this.state.divId.indexOf(e.target.id);
    let audio = new Audio(this.state.src[num])
    audio.currentTime = 0
     if(this.state.play && this.state.myTurn){
      audio.play()
      if(this.state.muteMode){audio.volume=0}
      e.target.classList.add('down')
    }
    setTimeout(() => {
      e.target.classList.remove('down')
    }, 200);
    this.state.myArr.push(num)
    this.setState({myArr:this.state.myArr})
    let x = JSON.stringify(this.state.myArr);
    let y = JSON.stringify(this.state.machineArr);
    if(x===y && this.state.play){
      let score = this.state.score+1;
      this.setState({score:score})
      setTimeout(() => {
          this.computerPlay()
          // i=0;
          this.setState({myArr:[]})
        }, 1000);
    }
    if(x.length===y.length && x!==y){
      this.gameover()
    }
  }
  gameover =()=>{
     let audioGmaeover = new Audio(this.state.otherSounds[1])
     audioGmaeover.play()
     if(this.state.muteMode){audioGmaeover.volume=0} 

       this.setState({machineArr:[],gameover:true,play:false,newScore:this.state.score})
       setTimeout(() => {
         this.postHandler()
        }, 100);
  }
  playHandler = ()=>{
    this.setState({score:0,machineArr:[],play:true,myTurn:false,numberOftimes:this.state.numberOftimes+1});
    let audio = new Audio(this.state.otherSounds[0])
    audio.play()
    if(this.state.muteMode){audio.volume=0} 
    setTimeout(() => {
      this.computerPlay();
    }, 1000);
  }

  saveHandler = ()=>{
    if(this.state.enterName){
      this.setState({newName:this.state.newName})
    }
  }
  // get data from server(firebase.google)
  componentDidMount = ()=>{
    let name= localStorage.getItem('name')
    if(name!==null){
      // console.log();
        this.setState({newName:name,formShow:false,signedIn:true,menu:true})
       }
       this.informationHandler()
  }
  informationHandler = ()=>{
      
    this.setState({isPending:true})
    fetch('https://highestscores-7983d-default-rtdb.firebaseio.com/users.json')
      .then(res =>{
        return res.json();
      })
      .then(data=>{
        // console.log(data);
        let users = Object.values(data)
        let sortUsers = [...users].sort((a,b)=>b.score-a.score)
        // console.log(sortUsers);
        this.setState({objectData:data,users:users,sortUsers:sortUsers,isPending:false,numberOftimes:users.length,serverData:true})
        // console.log(Object.entries(users))
        })
      .catch (()=> {
        if(!this.state.play){this.setState({formShow:true})}
      this.setState({isPending:false,serverData:false,menu:false})
    })
    }
 postHandler= ()=>{
       let highestScore=null
       let userId;
        if(this.state.users!==null){
         for(let i in this.state.objectData){
            if(this.state.objectData[i].name===this.state.newName){
              highestScore=this.state.newScore>this.state.objectData[i].score?
              this.state.newScore:
              this.state.objectData[i].score;
              userId=i;
              // console.log(highestScore);
       }}
       }
       if(this.state.newName!=null ){ //&& this.state.newScore>0
       fetch(`https://highestscores-7983d-default-rtdb.firebaseio.com/users/${userId}/score.json`, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(highestScore)      
    })
  }
  }

  gameMenuHandler = (name)=>{
    if(name!==null){
      localStorage.setItem('name',name)
         this.setState({newName:name,signedIn:true})
      }
      this.setState({appInfo:true,formShow:false,menu:true,guest:false})
      
  }
  guestHandler = ()=>{
      this.setState({appInfo:true,formShow:false,guest:true,menu:true})
  }
  getBackHandler = ()=>{
       this.setState({appInfo:false,formShow:false,menu:false})
  }
  logOutHandler= ()=>{
    this.informationHandler()
    this.setState({appInfo:true,menu:false,gameover:false,formShow:true,signedIn:true})
    localStorage.clear();
  }
  logInHandler= ()=>{
    
    this.setState({appInfo:true,menu:false,gameover:false,formShow:true,guest:false,signedIn:true})
  }

  menuHandler= ()=>{
    // console.log(this.state.signedIn);
    this.setState({appInfo:true,gameover:false,play:false})
    // this.state.signedIn?this.setState({formShow:false,menu:true}):
    this.setState({formShow:false,menu:true})
    this.informationHandler()

  }
  tryAgainHandler= ()=>{
    this.setState({machineArr:[],myArr:[],
      score:0,gameover:false,play:false,
      myTurn:false});
      this.informationHandler()
  }
  muteModeHandler = ()=>{
    this.setState({muteMode:!this.state.muteMode})
  }