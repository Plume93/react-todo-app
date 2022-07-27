import './App.css';
import TodoList from './components/TodoList';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './components/LoginButton';


function App() {
  return (
    <div className="todo-app">
     <Auth0Provider
     domain="dev-m2mklypb.eu.auth0.com"
    clientId="GgU70co849jx0VxY2ZLspyblOfU85AIc"
    redirectUri={window.location.origin}
  >
     <TodoList />
     <LoginButton/>
     </Auth0Provider>
    </div>
  );
}

export default App;
