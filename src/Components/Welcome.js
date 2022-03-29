import React,{Component} from 'react';

class Welcome extends Component{

    
    render(){
        const {name,degree} =this.props
        return <>
         {/* this will return name passed to class component using props and this keyword */}
            <h1>This is {name} from class component and i am a {degree}</h1>
           

        </>
    }
}
export default Welcome;