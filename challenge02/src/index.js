import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();

const img1 = "https://source.unsplash.com/200x200/?nature,water";
const img2 = "https://source.unsplash.com/250x200/?nature,water";
const img3 = "https://source.unsplash.com/300x200/?nature,water";
const img4 = "https://source.unsplash.com/400x200/?nature,water";

let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
ReactDOM.render(
  <React.Fragment>
     <h1 className = "heading">This is Gaurav Singh</h1>
     <h4>Today date is {day+"/"+month+"/"+year} </h4>
     <h4>Current Time is {hour+":"+min+":"+sec} </h4>

     <img src = {img1} alt="random img"/>
     <img src = {img2} alt="random img"/>
     <img src = {img3} alt="random img"/>
     <img src = {img4} alt="random img"/>


  </React.Fragment>,
  document.getElementById('root')
);