/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import CameraPage from './App_take_photo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CameraPage);
