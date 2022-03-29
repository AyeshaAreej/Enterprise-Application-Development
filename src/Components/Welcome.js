import React,{Component} from 'react';

class Welcome extends Component{

    render(){

        return <>
         {/* this will return name passed to class component using props and this keyword */}
            <h1>This is {this.props.name} from class component</h1>

        </>
    }
}
export default Welcome;