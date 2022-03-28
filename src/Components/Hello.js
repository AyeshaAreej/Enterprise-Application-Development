import React from 'react';

const Hello=()=>
{
    //with JSX
    // return(
    //     <div>
    //         <h1>
    //             Hello World
    //         </h1>
    //     </div>
    // )

    //Without using JSX
return React.createElement(
    'div',
    {id:'hello'}, //object of key value pairs
    'Hello Ayesha'
)
}


export default Hello;