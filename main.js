import App from './component/app.js';
import { attach } from './store.js';
var root = document.querySelector('.todoapp');

attach(App,root);