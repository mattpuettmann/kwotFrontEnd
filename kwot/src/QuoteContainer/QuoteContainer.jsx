import React, {Component} from 'react';

class QuoteContainer extends Component {
    constructor(){
        super();
        this.state = {
            quotes: []
        }
    }

    componentDidMount(){
        console.log('component is mounting')
        this.getQuotes();
    }
    getQuotes = async () => {
        console.log('this is getQuotes')
      try {
        const response = await fetch('http://localhost:8000/api/v1/quotes', {
          credentials: 'include'
        });
        
        const quotesParsed = await response.json();
        console.log(quotesParsed, 'this is quotesParsed')
        this.setState({
            quotes: quotesParsed
        })
      } catch(err) {
        console.log(err);
      }
    }

    handleDelete = async (id, e) => {
        e.preventDefault();
        console.log('delete button clicked')
        console.log(id, 'this is the id we want to delete')
        try{
            const response = await fetch('http://localhost:8000/api/v1/quotes/' + id, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
            const parsedResponse = await response.json();
            console.log(parsedResponse)
        }catch(err){
            console.log(err)
        }
    }

    render(){
        console.log(this.state, 'this is state')

        return <div>
            <h5>All of the user's quotes go here.</h5>
            {this.state.quotes.map((quote, index) => (
            <div key={quote.id}>
                <p>{quote.body}</p>
                <button onClick={this.handleDelete.bind(null, quote.id)}>DELETE</button>
            </div>
    ))}
        </div>
    }
}


export default QuoteContainer
