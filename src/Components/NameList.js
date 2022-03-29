import React from 'react'
import Person from './Person'
function NameList() {
    const persons=[
        {
            id:1,
            name:'Harry',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Diana',
            age:25,
            skill:'Angular'
        },
        {
            id:1,
            name:'Kat',
            age:23,
            skill:'React Native'
        },
    ]
    const personList=persons.map(person=>  <h2>I am {person.name}. I am {person.age} year old. And i know {person.skill} </h2>)
     return  <div> NameList 
    {personList}
      </div>
 
}

export default NameList