import React from 'react'

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
            id:3,
            name:'Kat',
            age:23,
            skill:'React Native'
        },
    ]
    //key ={person.id} or key={index}
    const personList=persons.map((person, index)=>  <h2 key ={index}> {index} I am {person.name}. I am {person.age} year old. And i know {person.skill} </h2>)
     return  <div> NameList 
    {personList}
      </div>
 
}

export default NameList