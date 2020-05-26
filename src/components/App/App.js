import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';
import Location from '../../util/location';
import {v4 as uuidv4} from 'uuid';
// const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// const businesses = [business,business,business,business,business,business];

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      invalid: false,
      businesses: [],
      message: "Search what your stomach desires, or try some of our recommendations",
      suggestion: [{
        id: uuidv4(),
        location: "Vancouver",
        category: "Sushi",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg",
      },{
        id: uuidv4(),
        location: "Vancouver",
        category: "Pizza",
        imageSrc: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1563392585%2Fpepperoni-skillet-pizza-1907.jpg%3Fitok%3Dl_08ukf0",
      },{
        id: uuidv4(),
        location: "Vancouver",
        category: "Korean",
        imageSrc: "https://cdn.shopify.com/s/files/1/2246/7407/articles/kfoodtable-e1552928746975_1444x.png?v=1560793954",
      }]
    }
    this.searchYelp = this.searchYelp.bind(this);
    this.clickSearchSuggestion = this.clickSearchSuggestion.bind(this);
  }

  async searchYelp(term, location, sortBy){
    term = term || 'Sushi';
    location = location || 'Vancouver';
    const businesses = await Yelp.search(term, location, sortBy);
    if(businesses == undefined || businesses == null || businesses.length === 0 ){
      this.setState({invalid: true, businesses: [], message: `Sorry 0 results were found for ${term} in: ${location}`})
    }else{
      const amount = businesses.length;
      this.setState({businesses: businesses, invalid: false, message: `${amount} results were found for ${term} in: ${location}`})
    }
  };

  async clickSearchSuggestion(term, location){
    console.log('click sugg');
    console.log(`${term}, ${location}`);
    this.searchYelp(term, location, "best_match");
  }


// test for later 
// <button onClick = {Location.where()}></button>

  render(){
      return (
        <div className="App">
          <h1>YELP CLONE</h1>
          <SearchBar searchYelp = {this.searchYelp}/>
          <h2>{this.state.message}</h2>
          <BusinessList businesses = {this.state.businesses}/>
          <SearchSuggestions onClick = {this.clickSearchSuggestion} suggestions = {this.state.suggestion}></SearchSuggestions>
        </div>
      );  
  }
}


export default App;
