import React, {Component} from 'react';

class EditContainer extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            email: ""
        }
    }

    componentDidMount(){
        this.setState({
            username: this.props.username,
            email: this.props.email
        })
    }
    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log('heyoooooooooo');
        e.preventDefault();
        this.props.handleEdit(this.state);
        console.log('handleEdit being hit!!')
        console.log(this.props)
    }
    handleDelete = async (e) => {
        e.preventDefault();
        console.log("Deleting!");
        try{
            const result = await fetch(`http://localhost:8000/users/registration/me`, {
                method: "DELETE",
                credentials: "include"
            })
            const parsedResult = await result.json();
            console.log(parsedResult)
        }catch(err){
            console.log(err);
        }
    }




    render(){
        console.log(this.state)
        return <div>
            <h1>Edit page!!!!!</h1>
            Username: <input onChange={this.handleFormChange} type="text" name="username" value={this.state.username} /><br/>
            Email: <input onChange={this.handleFormChange} type="text" name="email" value={this.state.email}/><br/>
            <button onClick={this.handleSubmit}>Submit Edits</button>
        </div>
    }
}




export default EditContainer