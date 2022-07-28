import './App.css';
import TodoList from './components/TodoList';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/ProfileInfo';


function App() {
  return (
    <div className="todo-app">
     <Auth0Provider
     domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
  >
     <TodoList />
     <div className='auth-container'>
     <div className="login-container">
     <LoginButton/>
     <LogoutButton/>
     </div>
     </div>
     <div className='profile-container'>
     <Profile/>
     </div>
     </Auth0Provider>
    </div>
  );
}

export default App;
