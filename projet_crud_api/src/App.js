import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams
} from "react-router-dom";
import axios from 'axios';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/todos/:id" children={<Child />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// Display Home page
function Home() {
  return <ToDoList />;
};

// Display Children page
function Child() {
    let {id} = useParams();
    return (
      <DynamicTitle id={id} />
    );
};

// async Function to get data from an url
async function getUrlAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

// Debounce function with 300ms if there is no timer set
const debounce = (func, number) => {
  let timer = number || 300;
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(func, timer);  
}

let debounceTimeout; // Timeout du debounce
const todosUrl = 'http://localhost:4000/todos';

// Do an AJAX Call then build the ToDoList from the data
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = { data: [] };
  }

  componentDidMount() {
    this.fetchData(todosUrl);
    console.log('ToDoList est monté !')
  }

  componentDidUpdate() {
    console.log('ToDoList se met à jour !');
  }

  fetchData = async url => {
    const data = await getUrlAsync(url);
    this.setState({
      data: data
    })
  }

  render() {
    console.log(this.state.data);
    console.log('ToDoList Render !')
    return (
      <div>
        <ul>
          {this.state.data.map(item => (
            <li key={item.id}>
              <Link to={"/todos/"+item.id}>
                {item.title}
              </Link>
              <Delete id={item.id} refreshList={this.fetchData} name='X'/>
            </li>
          ))}
        </ul>
        <CreateNewTodo refreshList={this.fetchData} />
      </div>
    )
  }

};

// Input + Button to create a New ToDo in the list
class CreateNewTodo extends React.Component {
  state = {userValue:""}

  componentDidUpdate() {
    console.log('CreateNewTodo se met à jour !')
  }

  // Input value control
  valueControl = event => {
    this.setState({
      userValue: event.target.value
    })
  }

  // When Create button is clicked
  addTodo = () => {
    axios.post(todosUrl, {
      title: this.state.userValue
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        this.props.refreshList(todosUrl);
      });
  }

  render() {
    console.log('CreateNewTodo Render !')
    return (
        <div>
          <input type='text' value={this.state.userValue} onChange={this.valueControl} />
          <button onClick={this.addTodo}>Create "{this.state.userValue}"</button>
        </div>
    )
  }
};

// Button Delete a ToDo from the list
class Delete extends React.Component {
  state = {redirection: false}

  deleteTodo = () => {
    let urlToDelete = todosUrl + '/' + this.props.id
    axios.delete(urlToDelete)
      .then( (response) => {
        console.log(response);
        if (this.props.refreshList) { // Update ToDoList if props.refreshList exist
          this.props.refreshList(todosUrl);
        }
        this.setState({ // Update component to render a Redirect
          redirection: true
        });
      });
  }

  render() {
    const redirection = this.state.redirection;
    if (redirection) { return <Redirect to='/' /> }

    return (
      <button style={{marginLeft: 2 + 'em'}} onClick={this.deleteTodo}>{this.props.name}</button>
    )
  }
};

// Input + Button to edit and save the title of a ToDo
class DynamicTitle extends React.Component {
  state = { 
    titleValue:"",
    redirection: false
  }

  componentDidMount() {
    let urlToDisplay = todosUrl + '/' + this.props.id
    axios.get(urlToDisplay, {
      id: this.props.id
      })
      .then((response) => {
        this.setState({
          titleValue: response.data.title
        })
      })
  }

  // Input value control
  valueControl = event => {
    this.setState({
      titleValue: event.target.value
    });
    debounce(this.changeTitle);
  }

  // When Save button is clicked
  changeTitle = () => {
    axios.post(todosUrl, {  // Update the data
      id: this.props.id,    // With current id
      title: this.state.titleValue // and new title
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        this.setState({ // Update component to render a Redirect
          redirection: true
        })
      });
  }

  render(){
    const redirection = this.state.redirection;
    if (redirection) { return <Redirect to='/' /> }
    
    return(
      <div>
        <h2>{this.state.titleValue}</h2>
        <input type='text' value={this.state.titleValue} onChange={this.valueControl} />
        <button onClick={this.changeTitle}>Save</button>
        <Delete id={this.props.id} name='Supprimer le ToDo' />
      </div>
    )
  }
};