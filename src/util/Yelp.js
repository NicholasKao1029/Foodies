const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;


const cors_prefix ='https://cors-anywhere.herokuapp.com/';
const url = 'https://api.yelp.com/v3/businesses/search?term=';
// 'TERM&location=LOCATION&sort_by=SORT_BY';'

const Yelp = {
  search(term, location, sortBy){
  const endpoint=`${cors_prefix}${url}${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(endpoint, {
      headers:{
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          price: business.price,
          phone: business.phone,
        }));
      }
    })
  }
};



export default Yelp