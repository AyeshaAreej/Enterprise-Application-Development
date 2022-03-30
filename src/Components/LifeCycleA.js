import React, { Component } from 'react'

 class LifeCycleA extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Ayesha'
       }
       console.log('LifecycleA constructor')
     }
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleA getDerivedStateFromProps')
     }
  
  componentDidMount(){
      console.log('LifecycleA componentDidMount')
  }
     render() {
    console.log('LifecycleA render')
    return (
        
      <div>LifeCycleA</div>
    )
  }
}

export default LifeCycleA