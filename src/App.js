import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/index';
import UserProfile from './components/UserProfile';

function App() {
  const dispatch = useDispatch();
  const authState = useSelector(myState => myState.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!authState && <Auth />}
      {authState && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
