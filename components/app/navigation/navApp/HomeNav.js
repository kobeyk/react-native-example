
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../../../pages/Home'
import Mine from '../../../pages/Mine'

const navStack = createStackNavigator(
    {
        Home:Home,
        Mine:Mine
    },
    {
        initialRouteName:'Home'
    }
);

export default navStack;