import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component{
    state = {term:""}

    onFormSubmit= (event)=>{
        event.preventDefault();
        this.props.onTermSubmit(this.state.term)
    }
    render(){
        return(
            <div className="search-box">
                <form className="form" onSubmit={this.onFormSubmit}>
                    <div className="box">
                        <input
                            type="text"
                            className="search-text"
                            value={this.state.term}
                            onChange={(e)=>{this.setState({term: e.target.value})}}
                            placeholder="Search"
                        />
                        <span className="search-btn" onClick={this.onFormSubmit}><i className="search icon big"></i></span>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar