// https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/

import Desktop from './Desktop';
import Mobile from './Mobile';

import { useMediaQuery } from 'react-responsive';

function App() {

  const mobile_threshold = 1400;

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width:' + mobile_threshold + 'px)'
  })

  return (
    <>
        {isDesktopOrLaptop ? <Desktop/> : <Mobile/>}
    </>
  );
}


export default App;
