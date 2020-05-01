import React from 'react';
import './App.css';
import List from './componment/tasks-list/List';
import Input from './componment/task-form/input';
let objects  = [{ title : "learn html" , duration : 30 ,description:"hhhhhhhhhhhhh", details :{
  type :"text" , date :"06/03/2020 09:15"     
}}
,{ title :"learn xml" , duration : 10 ,description:"hhhhhhhhhhhhh", details :{
  type :"text" , date :"06/03/2020 09:15"     
}},
{ title :"learn css" , duration : 20 ,description:"hhhhhhhhhhhhh", details :{
  type :"text" , date :"06/03/2020 09:15"     
}}]
function App() {
  return (
    <div className="App-row">
      <Input />
      <List objects={objects} />
    </div>
  );
}

export default App;
