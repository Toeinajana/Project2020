import React, { Component } from 'react'
import Order from './Order'


export class tutorial extends Component {

//    alertText = () => {

//     alert('hello from alert')
//   }

    render() {

        return (
            <div>
                <h1>{this.props.firstname}</h1>
                {/* <button onClick={this.props.updateState}>from tutorial</button> */}
                <button onClick={this.props.alertText}>from tutorial</button>
                
            </div>
        )
    }
}

export default tutorial

