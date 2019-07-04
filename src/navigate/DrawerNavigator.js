/**
 * Created by LannyCodes on 2019/5/25
 */

import {createDrawerNavigator,} from 'react-navigation';
import Drawer1 from '../screen/drawerNavi/Drawer1'
import Drawer2 from '../screen/drawerNavi/Drawer2'

const MyDrawerNavigator = createDrawerNavigator({
    Drawer1: {
        screen: Drawer1,
    },
    Drawer2: {
        screen: Drawer2,
    },
});

export default MyDrawerNavigator;