import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    updateSearchTerm(text) {
        this.setState({
            searchTerm :text
        });
    };
    render() {
        const characters = this.props.characters.filter( (item) => 
            item.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1
        )
        return (
        <div className="live-search">
            <SearchForm onChange={text => this.updateSearchTerm(text)} />
            <CharacterCount count={characters.length} />
            <CharacterList characters={characters} />
        </div>
        )
    };
}
