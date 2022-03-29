// https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/

import Desktop from './Desktop';
import Mobile from './Mobile';

import { useMediaQuery } from 'react-responsive';

function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1500px)'
  })

  console.log(isDesktopOrLaptop);

  return (
    <>
        {isDesktopOrLaptop ? <Desktop/> : <Mobile/>}
    </>
  );
}


export default App;
