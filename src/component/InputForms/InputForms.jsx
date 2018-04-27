import React from 'react';
import {Input} from 'element-react';

export default class InputForms extends React.Component{
    valueChange = (event)=>{
        this.props.valueChange('name',event)
    }

    render(){
        const Forms = this.props.Forms
        return(
            <Input  prepend={Forms} value={Forms.name} onChange={this.valueChange}/>
        )
    }
}