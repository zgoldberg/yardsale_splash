// https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/

import Desktop from './Desktop';

import { useMediaQuery } from 'react-responsive';

function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1500px)'
  })

  console.log(isDesktopOrLaptop);

  return (
    <>

        {isDesktopOrLaptop ? <Desktop/> : <p>mobile</p>}

    </>
  );
}


export default App;
