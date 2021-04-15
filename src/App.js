import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/header/Header.js";
import MainSubheader from "./components/mainSubheader/MainSubheader.js";
import Gallery from './components//gallery/Gallery.js'
import './App.css'


function App() {
  return (
	  <Router>
		<div className="App">
			<Header />
			<Switch>
				<Route path="/">
					<MainSubheader />
					<Gallery />
				</Route>
			</Switch>
		</div>
	  </Router>
  );
}

export default App;
