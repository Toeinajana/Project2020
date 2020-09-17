import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Logo from '../img/Logo.PNG'
import "../components/Order.css"
import AppBar from './AppBar'
import Tutorial from './tutorial'


var getMessage = (x) =>{
   
    x = "";

    return "hello " + x;


}

var doSomething = (b,c) => {

   b = getMessage();
   c = "world";

   return b + c;
}

var app = (t) => {

    console.log(sum());

}

var sum =(a, b) => {

    a = 45;
    b = 4;

    return a + b;


}

const name = () => {return "TJ and Adam"};


export class Order extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstname: 'Hello',
             clicked: props.clicked
        }

    
    }
    
    isClicked(){
        this.setState({clicked: !this.state.clicked})
    }
    
   

    handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        });

    }

    updateState = () => {
        this.setState({firstname : "TJ Gantong"})
    }

    alertText = () => {

        alert('hello from alert')
      }
    
    render() {

       var btnClass = this.state.clicked ? 'green' : '';

        console.log(4+7)

        return (

            <div>
                <AppBar firstname={this.state.firstname}/>

            <h1 className={btnClass}>{this.state.firstname}</h1>
            {/* <h1>{this.updateState}</h1> */}
            <button onClick={this.updateState , this.isClicked.bind(this)}>Click me</button>
            <Passprops firstname="Adam"></Passprops>
            <h1>Hello {name()}</h1>

            {/* <Tutorial firstname ={this.state.firstname} updateState={this.updateState}></Tutorial> */}
            <Tutorial firstname ={this.state.firstname} alertText={this.alertText}></Tutorial>
           

            
            <br/> 
            <form>
                <img className="logoImg" src={Logo}></img>
            <br/>    
            <div>
           <h2>Register</h2>
            </div>
           <div>
            {this.updateState}
           {console.log(this.state.firstname)}
               
              
        <label>First name : </label>
               <input 
               type ="text"
            //    value = {this.updateState} 
               value = {this.state.firstname} 
               onChange = {this.handleFirstnameChange}
               />
               <br/><br/>
               <label>Last name : </label>
               <input type ='text'/>
               <br/><br/>
               <label>Phone number : </label>
               <input type ='text'/>
               <br/><br/>
               <label>Email : </label>
               <input type ='text'/>
               <br/><br/>
               <label>Food allergy : </label>
               <input type ='text'/>
               <br/><br/>
               <TextField id="filled-basic" label="Food allergy" variant="filled"/>

           </div>
       </form>
    
             </div>






            
           
      

        
        )
    }
}

class Passprops extends Component {
    render(){
        return(
            <div>
                <h1>
                    Hello {this.props.firstname}
                </h1>
            </div>
        )
    }
}

export default Order
