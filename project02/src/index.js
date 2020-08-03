import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


let currDate = new Date(2020, 5, 5, 21);
let time = currDate.getHours();
let mrng = "";

const col = {

};
if (time >= 1 && time <= 11) {
  mrng = "Good Morning";
  col.color = 'green';
}

else if (time >= 12 && time <= 19) {
  mrng = "Good AfterNoon";
  col.color = 'orange';
}

else {
  mrng = "Good Night";
  col.color = 'red';
}


ReactDOM.render(
  <>
    <div className = "container">
      <h1> Hello Sir , <span style={col}> {mrng} </span>  </h1>
    </div>
  </>,
  document.getElementById('root')
);
