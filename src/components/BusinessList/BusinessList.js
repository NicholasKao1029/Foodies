import React from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import '../Business/Business.js';
import Business from '../Business/Business.js';

class BusinessList extends React.Component{
 render(){
   if(this.props.businesses){
    return(
      <div className="BusinessList">
          {this.props.businesses.map(business =>{
              return <Business key={business.id} business = {business}/>
          })}
      </div>
   )
   }else{
   }
     
 }   
}

export default BusinessList;