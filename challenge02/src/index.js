import React from 'react';
import ReactDOM from 'react-dom';

var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();

let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
ReactDOM.render(
  <React.Fragment>
     <h1>This is Gaurav Singh</h1>
     <h4>Today date is {day+"/"+month+"/"+year} </h4>
     <h4>Current Time is {hour+":"+min+":"+sec} </h4>
  </React.Fragment>,
  document.getElementById('root')
);