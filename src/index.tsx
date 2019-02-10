import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// TODO: change to `serviceWorker.register();` before creating production build
serviceWorker.unregister();
