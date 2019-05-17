import React, {Component} from 'react'
import './style/Welcome.css'

class Welcome extends Component{

    constructor(){
        super()

        this.state={
        playerName:''
        }
    }
    
    onChangeHandle=(e)=>{
        console.log(this.state)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onClickHandle = (playerName) =>{
        console.log('clicked')
        fetch('http://localhost:8080/newUser',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: playerName
            })
        }).catch(error => console.log(error))
        
    }

    render(){
        return(
            <div className="backgroundImage">
                <span className="welcomeStyling"><b>Welcome to Pantomath!</b></span>
                <div className="nameForm">
                {/* <input type="text" placeholder="Enter Name" onChange={this.onChangeHandle} name="playerName"/>
                <button onClick={()=>this.onClickHandle(this.state.playerName)}>Enter</button> */}
                </div>
            </div>
        )
    }
}

export default Welcome