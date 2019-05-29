import React, {Component} from 'react';

class NewContainer extends Component {
    constructor(){
        super();
        this.state = {
            body: "",
            attributed_to: "",
            medium: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return <form>
            Body: <input type="text" name="body" onChange={this.handleChange}/><br/>
            Author: <input type="text" name="attributed_to" onChange={this.handleChange}/><br/>
            Medium: <input type="text" name="medium" onChange={this.handleChange}/><br/>
            <button onClick={this.handleSubmit}>Add Quote</button>
        </form>
    }
}


export default NewContainer