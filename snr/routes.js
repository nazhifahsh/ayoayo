import { StackNavigator } from 'react-navigation';
import Splash from './splash';
import Menu from '../menu/menu';
import Doa from '../menu/indexdoa';
import Konsul from '../menu/konsul';
import UstAulia from '../menu/contactperson/ustadzaulia';
import UstBurhan from '../menu/contactperson/ustadzaulia';
import UstFauzan from '../menu/contactperson/ustadzaulia';


const Routes = StackNavigator({
    Splash:{screen: Splash, navigationOptions:{header:null} },
    Menu: { screen: Menu, navigationOptions:{header:null} },
    Doa: { screen: Doa, navigationOptions:{header:null} },
    Konsul:{screen: Konsul, navigationOptions:{header:null} },
    UstAulia:{screen: UstAulia, navigationOptions:{header:null}},
    UstBurhan:{screen: UstBurhan, navigationOptions:{header:null}},
    UstFauzan:{screen: UstFauzan, navigationOptions:{header:null}},
})
export default Routes