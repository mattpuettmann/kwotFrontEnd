import React, {Component} from 'react';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import NewContainer from '../NewContainer/NewContainer';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }
    showCreate = (e) => {
        e.preventDefault();
        this.setState({
            showModal: true
        })
    }

    render(){
        return <div>
            <h1>Logged in to {this.props.username}'s User Container!</h1>
            <button onClick={this.showCreate}>Add New Quote</button>
            {this.state.showModal ?
            <NewContainer showCreate={this.showCreate}/>
            :
            null
            }
            <button onClick={this.props.handleLogout}>Logout</button>
            <h3>Here are all of {this.props.username}'s quotes:</h3>
            <QuoteContainer/>

        </div>
    }
}




export default UserContainer