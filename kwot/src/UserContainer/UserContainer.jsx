import React, {Component} from 'react';
import EditContainer from '../AuthGateway/EditContainer/EditContainer'

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }

    handleEdit = async (formData) => {
        try{
            const result = await fetch(`http://localhost:8000/users/registration/me`, {
                method: "PUT",
                credentials: 'include',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const parsedResult = await result.json();
            console.log(parsedResult);
            console.log(formData)
            await this.setState({
                username: parsedResult.data.username,
                email: parsedResult.data.email
            })
        }catch(err){
            console.log(err);
        }
    }
    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }


    render(){
        return <div>
            <h1>Logged in to {this.props.username}'s User Container!</h1>
            {this.state.showModal ?
            <EditContainer username={this.props.username} email={this.props.email} handleEdit={this.handleEdit}/>
            :
            null
            }<br/>
            <button onClick={this.showModal}>Edit</button>
            <button>Delete</button>
            <button onClick={this.props.handleLogout}>Logout</button>
        </div>
    }
}




export default UserContainer