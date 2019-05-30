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

    render(){
        console.log(this.state, 'this is state')

        return <div>
            <h5>All of the user's quotes go here.</h5>
            {this.state.quotes.map((quote, index) => (
            <div key={quote.id}>
                <p>{quote.body}</p>
                <button>DELETE</button>
            </div>
    ))}
        </div>
    }
}


export default QuoteContainer
