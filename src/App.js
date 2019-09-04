import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import MobileNav from './components/MobileNav';
import MobileFooter from './components/MobileFooter';
import MainContent from './layout/MainContent';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import MyWorks from './pages/MyWorks';
import NotFound from './pages/NotFound';

const App = () => (
  <Fragment>
    <Sidebar />
    <MobileNav />
    <MainContent>
      {/* <Header /> */}
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/myworks' component={MyWorks} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </MainContent>
    <MobileFooter />
  </Fragment>
);

export default App;
