import React from 'react';
import ReactDOM from 'react-dom';
import CoinigyDemo from './CoinigyDemo';

import axios from 'axios';

window.axios = axios;


ReactDOM.render(<CoinigyDemo />, document.getElementById('start'));


