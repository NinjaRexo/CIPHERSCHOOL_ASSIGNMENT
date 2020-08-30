import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";

ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<Footer />
	</React.Fragment>, document.getElementById('root'));
serviceWorker.unregister();