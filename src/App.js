import React, { Fragment } from 'react';
import SideBar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Row from 'react-bootstrap/Row';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Fragment>
			<Row>
				<SideBar />
				<MainContent>
					<Switch>
						<Route exact path='/' component={About} />
						<Route path='/blog' component={Blog} />
						<Route path='/contact' component={Contact} />
						<Route component={NotFound} />
					</Switch>
				</MainContent>
			</Row>
		</Fragment>
	);
}

export default App;
