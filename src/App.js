import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField:''
    };

    // this.handleChange = this.handleChange.bind(this);//Explicitly state to what context this should be
  }
  componentDidMount=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())//Will give us response in JSON format
    .then( users => this.setState({monsters:users}));
  };
  handleChange = (e) => {
    this.setState({searchField:e.target.value});
    //Arrow function will automatically bind it to the correct scope
    //Binding respective to context
  };
render(){
  const{monsters, searchField} = this.state;
  const filteredMonsters = monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <div className="App">
    <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='search monster'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
 }
}

export default App;
