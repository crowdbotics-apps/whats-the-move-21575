import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn14145305Navigator from '../features/SignIn14145305/navigator';
import Settings6145303Navigator from '../features/Settings6145303/navigator';
import UserProfile145252Navigator from '../features/UserProfile145252/navigator';
import Maps145233Navigator from '../features/Maps145233/navigator';
import Settings145211Navigator from '../features/Settings145211/navigator';
import Settings145196Navigator from '../features/Settings145196/navigator';
import NotificationList145195Navigator from '../features/NotificationList145195/navigator';
import Maps145194Navigator from '../features/Maps145194/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn14145305: { screen: SignIn14145305Navigator },
Settings6145303: { screen: Settings6145303Navigator },
UserProfile145252: { screen: UserProfile145252Navigator },
Maps145233: { screen: Maps145233Navigator },
Settings145211: { screen: Settings145211Navigator },
Settings145196: { screen: Settings145196Navigator },
NotificationList145195: { screen: NotificationList145195Navigator },
Maps145194: { screen: Maps145194Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
