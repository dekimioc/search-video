import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ""
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default SearchBar;