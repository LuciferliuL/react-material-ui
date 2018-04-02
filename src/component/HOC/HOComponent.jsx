import React from 'react';

export const HOComponent = (Composed) => class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }

        this.handleClick.bind(this)
    }

    handleClick(){
        console.log(1)
    }

    componentDidMount(){
       // return
    }

    render(){
        return(
            <Composed {...this.props} data={this.state.data} onClick={this.handleClick}></Composed>
        )
    }

}


