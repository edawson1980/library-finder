import $ from 'jquery'
import axios from 'axios'
import SCWhat from './SCWhat/SCWhat'

export function queryBooks(title){
  console.log('finding books!')
  const term = title
  var url = "https://www.googleapis.com/books/v1/volumes?q=" + term + "&key=AIzaSyAuyXZMeyWg-0IBR8q7K7dTYlWkEq9oYxY";

// .replace(/\s/, "+")
  return axios.get(url).then(function(response) {
    console.log('raw response:')
    console.log(response)

    return response.map(result => {
      const{title} = result.book;
      return {
        title
      }
    })
  })

}



//throw some axios in here
