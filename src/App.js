import { Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component';

const HatsPage = (props) => {

  console.log(props.match.params)
  return (
  <div>
    <h1>Home PAGE</h1>
  </div>
  );
 };

const TopicList = (props) => {
  return (
  <div>
    <h1>Topic List</h1>
    <Link to={`${props.match.url}/13`} >To topic 13</Link>
    <Link to={`${props.match.url}/14`} >To topic 14</Link>
    <Link to={`${props.match.url}/15`} >To topic 15</Link>

  </div>
  );
}

const TopicDetail = (props) => {

  console.log(props)

  return (
  <div>
    <h1>Topic Detail PAGE</h1>
  </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'  component={HomePage}/>
        <Route exact path='/topics'  component={TopicList}/>
        <Route  path='/topics/:topicId'  component={TopicDetail}/>

      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
