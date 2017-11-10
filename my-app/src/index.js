import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepPurple800 as purple} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: purple,
  },
  appBar: {
    height: 50,
    color: purple
  },
});

const Page = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);


ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
