import React from 'react';

// import Greeting from "./greeting/Greeting";
// import Props from "./props/Props";
// import Counter from "./counter/Counter";



import './App.css';
import {SimpleForm, EssayForm} from './forms/Forms';
import {ListLoop, TableLoop} from './loops/Loops';
import {GetCall} from './http/Rest';

function App() {
  return (
    <div className="App">
      {/* <Greeting />
      <Props name=", hasta lue"/>

      <div className="App-intro">
        <Counter />
      </div> */}

      <h3>Simple form component</h3>
      <SimpleForm />
      <br/><br/>
      <hr/>
      <h3>Essay form component</h3>
      <br/><br/>
      <EssayForm />
      <br/><br/>
      <hr/>
      <h3>List creation with for Loop</h3>
      <ListLoop/>
      <br/><br/>
      <hr/>
      <h3>Table creation with for Loop</h3>
      <TableLoop/>
      <br/><br/>
      <hr/>
      <h3>REST call to an API</h3>   
      <GetCall/>

    </div>
  );
}

export default App;
