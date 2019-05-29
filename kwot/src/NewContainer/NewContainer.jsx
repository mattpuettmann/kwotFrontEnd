import React, {Component} from 'react';

class NewContainer extends Component {
    constructor(){
        super();
        this.state = {
            body: "",
            attributedTo: "",
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

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)
        try {
            const newQuote = await fetch('http://localhost:8000/api/v1/quotes', {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const parsedResponse = await newQuote.json();
        console.log(parsedResponse)
        // showCreate();

        }catch(err){
            console.log(err)
        }

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