/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './app/App'
import { name as appName } from './app.json'
import '@localization/i18n'

AppRegistry.registerComponent(appName, () => App)
