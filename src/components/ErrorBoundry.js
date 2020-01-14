import React from 'react';

class ErrorBoundry extends Comment {
    constructor(props) {
        super(props);
        this.state ={
            hasError: false
        }
    }

componantDidCatch(error, info){
    this.setState({hasError: true})
}

    render(){
        if (this.state.hasError){
            return <h1>OOOOOPS Thats not Good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;
