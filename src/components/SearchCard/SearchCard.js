import React from 'react';
import './SearchCard.css';


class SearchCard extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.onClick(this.props.suggestion.category, this.props.suggestion.location)
  }

  render(){
    return(
      <div onClick = {this.handleClick} className="SearchCard">
        <div className="image-container">
          <img src= {this.props.suggestion.imageSrc} alt=''/>
        </div>
        <div className="SearchCard-information">
          <div className="SearchCard-address">
            <p>{this.props.suggestion.location}</p>
          </div>
          <div className="SearchCard-reviews">
            <h3>{this.props.suggestion.category.toUpperCase()}</h3>
          </div>  
        </div>
      </div>
    )
  }
}

export default SearchCard;


/*
suggestion{
  name, maybe no need
  category, type
  city, place
}



*/