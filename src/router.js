import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ProvideAuth, useAuth } from "context/auth";
import { ProvideGroup } from "context/group";
import Login from "pages/login";
import PersonnalSpace from "pages/personnalSpace";
import Group from "pages/group";
import Page from "components/layout/page";

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function AppRouter() {
  return (
    <ProvideAuth>
      <Router>
        <Page>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/personnal-space">
              <PersonnalSpace />
            </PrivateRoute>
            <PrivateRoute path="/group/:idGroup">
              <ProvideGroup>
                <Group />
              </ProvideGroup>
            </PrivateRoute>
          </Switch>
        </Page>
      </Router>
    </ProvideAuth>
  );
}
