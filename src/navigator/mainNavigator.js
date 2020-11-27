import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen215059Navigator from '../features/BlankScreen215059/navigator';
import BlankScreen115055Navigator from '../features/BlankScreen115055/navigator';
import BlankScreen015054Navigator from '../features/BlankScreen015054/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen215059: { screen: BlankScreen215059Navigator },
BlankScreen115055: { screen: BlankScreen115055Navigator },
BlankScreen015054: { screen: BlankScreen015054Navigator },

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
