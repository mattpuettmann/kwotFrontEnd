import React, {Component} from 'react';

class EditContainer extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            email: ""
        }
    }
    render(){
        return <div>
            <h1>Edit page!!!!!</h1>
            Username: <input type="text" name="username"/><br/>
            Email: <input type="text" name="email"/><br/>
            <input type="submit"/>
        </div>
    }
}




export default EditContainer