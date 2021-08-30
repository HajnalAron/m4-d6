import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import TextAlert from './components/WarningSign';
import MyBadge from './components/MyBadge'
import FilterBookList from './components/FilterBookList';


class App extends Component {
  render(){
  return (
    <div className="App">
      <TextAlert text="Test Alert"/>
      <MyBadge text='Danger' color='danger'/>
      <div className="container">
        <div className="row">
          <FilterBookList />
        </div>          
      </div>
    </div>
  );
}
}

export default App;
