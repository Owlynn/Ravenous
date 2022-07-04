const apiKey = '9JKUasjFOFRdWQP_ZyqQvNr7Q7a8qKut1YolxEysCw4-BbDfl3kEJHZuTlwd6swst_6A7IyfM2LW9hh10q_d3ESlBp_T5GylcUirQnAk4rXf_P2LsOiPOrhy7BfDYnYx';

const Yelp = {
    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        , 
        { headers : 
            { 
                Authorization : `Bearer ${apiKey}`
            }
        }).then( response => {
            return response.json();
        }).then((jsonResponse) => { 
                if (jsonResponse.businesses){
                    return jsonResponse.businesses.map( business => {
                        return {
                        id : business.id,
                        imageSrc : business.image_url,
                        name : business.name,
                        adresss : business.location.adress1,
                        city : business.location.city,
                        state : business.location.state,
                        zipCode : business.location.zip_code,
                        category : business.categories[0].title,
                        rating : business.rating,
                        reviewCount : business.review_count
                        };
                    })
                }
            }
                
        );
    }    
};


export default Yelp;