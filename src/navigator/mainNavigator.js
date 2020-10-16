import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings145211Navigator from '../features/Settings145211/navigator';
import Settings145196Navigator from '../features/Settings145196/navigator';
import NotificationList145195Navigator from '../features/NotificationList145195/navigator';
import Maps145194Navigator from '../features/Maps145194/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
