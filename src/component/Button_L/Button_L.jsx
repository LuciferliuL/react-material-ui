import React from 'react';
import './Button_L.css'

class Button_L extends React.Component{
    constructor(props){
        super(props);
        this.state={
            style:'circle'
        }
    }

    Circle(){
        console.log(1)
        this.setState({
            style:!this.state.style
        })
    }

    render(){        
        return(
            <div className="Div_L">
                <button className="Button_L">{this.props.name}</button>
                <span className="Span_L"></span>
                <div className={this.state.circle} onClick={this.Circle.bind(this)}></div>
            </div>
        )
         
    }
}

export default Button_L;