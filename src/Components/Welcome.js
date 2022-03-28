import React,{Component} from 'react';

class Welcome extends Component{

    render(){

        return <>
         
            <h1>This is {this.props.name} from class component</h1>

        </>
    }
}
export default Welcome;