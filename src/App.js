import { Provider } from 'react-redux'
import store from './store'
import List from './components/List';

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;
