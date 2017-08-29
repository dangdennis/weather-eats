import React from 'react';

const YTSearch = (props) => {
  if(props.weather === null){
    return(
      <h1>Waiting...</h1>
    )
  }
  else{
    console.log('this is the weather id: ', props.weather)
    return(
      <h1>YT Search</h1>
    )
  }
}
export default YTSearch;
