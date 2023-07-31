/**
 * @format
 * 
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from './components/App';
import Slider from './components/Slider';

AppRegistry.registerComponent(appName, () => Slider);
