import React, {Component} from 'react';

class EditContainer extends Component {
    constructor(){
        super();
        this.state = {
            id: "",
            body: "",
            attributed_to: "",
            medium: ""
        }
    }
    componentDidMount(){
        console.log('it mounted!')
        this.setState({
            ...this.props.quote_to_edit

        })
        
    }
    fillForm = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/api/v1/quotes', {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = response.json()
        console.log(parsedResponse)
    }

    handleEdit = async (e) => {
        e.preventDefault();
        console.log('edit button clicked')
        console.log(this.state)
        try{
            const response = await fetch('http://localhost:8000/api/v1/quotes/' + this.state.id, {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json"
                }
                
            })
            const parsedResponse = await response.json()
            console.log(parsedResponse)
        }catch(err){
            console.log(err)
        }
    }


    handleFormChange = (e) => {
        e.preventDefault();
        this.setState({
            ...this.props.quote_to_edit,
            [e.target.name]: e.target.value
        })
    }
    render(){
        console.log(this.state)
        console.log(this.props.quote_to_edit)
        return <form>
            Body: <input type="text" name ="body" onChange={this.handleFormChange} value={this.state.body}/><br/>
            Author: <input onChange={this.handleFormChange} type="text" name ="attributed_to" value={this.state.attributed_to}/><br/>
            Medium: <input onChange={this.handleFormChange} type="text" name="medium" value={this.state.medium}/><br/>
            <button onClick={this.handleEdit}>Submit Edits</button>
        </form>
    }
}




export default EditContainer