import { StackNavigator } from 'react-navigation';
import Splash from './splash';
import Menu from '../menu/menu';
import Doa from '../menu/indexdoa';
import Konsul from '../menu/konsul';
import QandA from '../menu/indexQ&A'; 
import LMB from '../menu/kumpulananswer/laranganmakanberdiri';
import UstAulia from '../menu/contactperson/ustadzaulia';
import UstBurhan from '../menu/contactperson/ustadzburhan';
import UstFauzan from '../menu/contactperson/ustadzfauzan';


const Routes = StackNavigator({
    Splash:{screen: Splash, navigationOptions:{header:null} },
    Menu: { screen: Menu, navigationOptions:{header:null} },
    Doa: { screen: Doa, navigationOptions:{header:null} },
<<<<<<< HEAD
    Konsul:{screen: Konsul, navigationOptions:{title:'Konsultasi Syariah', headerStyle: {backgroundColor:'#060628'} , headerTitleStyle:{color:'white'}, headerTintColor:'white'} },
    UstAulia:{screen: UstAulia, navigationOptions:{title:'Contact', headerStyle: {backgroundColor:'#202021'}, headerTitleStyle:{color:'white'}, headerTintColor:'white'}},
    UstBurhan:{screen: UstBurhan,navigationOptions:{title:'Contact', headerStyle: {backgroundColor:'#202021'}, headerTitleStyle:{color:'white'}, headerTintColor:'white'}},
    UstFauzan:{screen: UstFauzan,navigationOptions:{title:'Contact', headerStyle: {backgroundColor:'#202021'}, headerTitleStyle:{color:'white'}, headerTintColor:'white'}},
=======
    Konsul:{screen: Konsul, navigationOptions:{header:null} },
    QandA:{screen: QandA,navigationOptions:{header:null}},
    LMB:{screen: LMB, navigationOptions:{header:null}},
    UstAulia:{screen: UstAulia, navigationOptions:{header:null}},
    UstBurhan:{screen: UstBurhan, navigationOptions:{header:null}},
    UstFauzan:{screen: UstFauzan, navigationOptions:{header:null}},
>>>>>>> fbeb72a0c3376ac89299b9aded45bd64269668dc
})
export default Routes