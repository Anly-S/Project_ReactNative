// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {HomeStackMavigation} from './src/navigations/AppNavigation';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <HomeStackMavigation />
//     </NavigationContainer>
//   );
// };

// export default App;
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/context/store';
import Main from './src/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
