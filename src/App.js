import "./App.css";
import { Route, Link, Switch, HashRouter} from "react-router-dom";
import Home from "./pages/home";
import Recipe from "./pages/recipes";
import { Context, themes, users } from "./context/Context";
import { useState } from 'react';
import ContextHandler from './components/ContextHandler/ContextHandler';

function App() {
    const [context, setContext] = useState({
      theme: themes.normal,
      user: users[0],
      applicationName: 'Grandma Recipes'
    });

    const changeThemeHandler = (newTheme) => {
      const newContext = Object.create(context);
      newContext.theme = themes[newTheme];
      setContext(newContext);
    }

    const changeUserHandler = (newUser) => {
      const newContext = Object.create(context);
      newContext.user = users.find(currentUser => currentUser.username === newUser);
      setContext(newContext);
    }

    const changeAppNameHandler = (newAppName) => {
      const newContext = Object.create(context);
      newContext.applicationName = newAppName;
      setContext(newContext);
    }

    return (
        <div>
          <Context.Provider value={context}>
            <ContextHandler 
              themes={themes}
              users={users}
              changeTheme={changeThemeHandler}
              changeUser={changeUserHandler}
              changeAppName={changeAppNameHandler}
            />
            <HashRouter>
              <nav className="navbar">
                <Link to="/">Recipes</Link>
                <Link to="/recipe/1">Perfection Salad</Link>
                <Link to="/recipe/2">Hamburger Pie</Link>
                <Link to="/recipe/3">Cherry Pineapple Bologna</Link>
              </nav>

              <Switch>
                <Route path="/recipe/:recipeId" component={Recipe}></Route>
                <Route path="/" component={Home}></Route>
              </Switch>
            </HashRouter>
          </Context.Provider>
            
        </div>)


}

export default App;
