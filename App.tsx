import { Fragment } from 'react';
import { StatusBar} from 'react-native'
import { Home } from './src/screens/home';
export default function App() {
  return (

    <Fragment>
      <StatusBar/>
      <Home />
    </Fragment>

  );  
}
