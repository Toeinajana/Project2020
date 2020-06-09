import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Logo from '../img/Logo.PNG'
import "../components/Order.css"
import AppBar from './AppBar'

export class Order extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstname: ''
        }
    }

    handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        });

    }
    
    render() {
        return (
            <div>
            <AppBar/>
            <br/> 
            <form>
                <img className="logoImg" src={Logo}></img>
            <br/>    
            <div>
           <h2>Register</h2>
            </div>
           <div>
               
              
               <label>First name : </label>
               <input 
               type ="text" 
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

export default Order
