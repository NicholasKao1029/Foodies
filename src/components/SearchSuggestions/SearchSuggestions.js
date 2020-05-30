import React from 'react';
import './SearchSuggestions.css';
import SearchCard from '../SearchCard/SearchCard';



class SearchSuggestions extends React.Component{
  constructor(props){
    super(props);
  }


 render(){
   return (
      <div className = "SearchSuggestions">
        {
          this.props.suggestions.map(s => {
            return <SearchCard key ={s.id} suggestion = {s} onClick = {this.props.onClick}/>
          })
        }
      </div>
   )
  }
}

export default SearchSuggestions;
