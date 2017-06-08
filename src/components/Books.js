import $ from 'jquery'
import axios from 'axios'
import map from 'lodash'
import SCWhat from './SCWhat/SCWhat'

export function queryBooks(titleQuery){
  console.log('finding books!')
  const term = titleQuery
  var url = "https://www.googleapis.com/books/v1/volumes?q=title:" + term + "&key=AIzaSyAuyXZMeyWg-0IBR8q7K7dTYlWkEq9oYxY";
// .replace(/\s/, "+");

  return axios.get(url).then(function(response) {
    console.log('raw response:')
    console.log(response)

//originally was response.map, but keeps throwing 'not a function' error
    return map(response).map(result => {
      const{volumeInfo} = result.book;
      return {
        volumeInfo
      }
    })
  })

}



//throw some axios in here
