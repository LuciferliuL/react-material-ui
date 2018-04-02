import React from 'react';
import './Button_L.css'

class Button_L extends React.Component{
    render(){
        return(
            <div className="Div_L">
                <button className="Button_L">{this.props.name}</button>
                <span className="Span_L"></span>
            </div>
        )
    }
}

export default Button_L;