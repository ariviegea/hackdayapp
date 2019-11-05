import React, { Component } from 'react';
import { list } from './style/Card';
import { available, notavailable } from './style/CardDetails';

const bookButton = {
    border:'1px solid black',
    backgroundColor: 'transparent',
    padding:'5px 10px',
    marginBottom: '5px',
    marginLeft: '5px'
}
class CardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apartments: {...this.props}
        }
    }

    bookAppartment = () => {
        fetch(`/api/apartments/${this.props.id}`, {
			method: 'PUT',
			headers: {
			  "Content-type": "application/json"
            },
            body: JSON.stringify(this.state.apartments)
        })
        .then(res => res.json())
        .then(apartments => { this.setState({ apartments })})
        .catch(err => console.log(err, 'Put request not working'));
    }

   

    render() {
        const { description } = this.props;
        return (
            <div>
                <ul style={list}>
                    <li><p>{description}</p></li>
                    <li>{this.state.apartments.available ? <b style={available}>{'Available'}</b> : <b style={notavailable}>{'Not available'}</b>}</li>
                </ul>
                <button style={bookButton}onClick={this.bookAppartment}>Book</button>
            </div>
        );
    }
}

export default CardDetails;