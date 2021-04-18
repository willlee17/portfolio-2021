import './App.css';

import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import { styles } from './containers/portfolioStyles';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = ({ classes }) => {
  return (
    <Container className={classNames(classes.AppContainer, 'app-container')}>
      <Grid container spacing={7}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className={'main-content container-shadow'}>
              <Switch>
                <Route exact path='/'>
                <Resume />
                </Route>
                <Route path='/portfolio'>
                <Portfolio />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(App);
