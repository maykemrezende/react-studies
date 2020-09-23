'use strict'

import React from 'react'
import CreateReactClass from 'create-react-class'

var title = CreateReactClass({
    render: function(){
        return React.createElement('h1', null, 'Título')
    }
})

export default title
