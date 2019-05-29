import React, {Component} from 'react';

class QuoteContainer extends Component {
    constructor(){
        super();
        this.state = {
            body: "",
            attributed_to: "",
            medium: ""
        }
    }
    render(){
        return <div>
            <h5>All of the user's quotes go here.</h5>
        </div>
    }
}


export default QuoteContainer
