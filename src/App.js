import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/header/Header.js";
import MainSubheader from "./components/mainSubheader/MainSubheader.js";
import Gallery from './components//gallery/Gallery.js'
import './App.css'
import ImagePage from './ImagePage.js';


function App() {
  return (
	  <Router>
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/">
					<MainSubheader />
					<Gallery />
				</Route>

				<Route path="/imagePage">
					<ImagePage />
				</Route>
			</Switch>
		</div>
	  </Router>
  );
}

export default App;
