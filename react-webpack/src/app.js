'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

 class App extends Component {
     render(){
         return (
            <div className='container'>
                {/* <Title name='Mayke' lastname='Rezende' /> */}
                {['blue', 'red', 'green'].map((square) => (                    
                    <Square key={square} color={square}></Square>
                ))}
            </div>
         )
     }
 }

export default App
