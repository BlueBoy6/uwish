import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ProvideAuth, useAuth } from "context/auth";
import { ProvideGroup } from "context/group";
import Login from "pages/Login";
import PersonnalSpace from "pages/PersonnalSpace";
import Group from "pages/Group";
import WishListInGroup from "pages/WishListInGroup";
import Page from "components/layout/Page";
import "index.css";

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
            <PrivateRoute exact path="/group/:idGroup">
              <ProvideGroup>
                <Group />
              </ProvideGroup>
            </PrivateRoute>
            <PrivateRoute path="/group/:idGroup/wishlist/:idWishlist">
              <ProvideGroup>
                <WishListInGroup />
              </ProvideGroup>
            </PrivateRoute>
          </Switch>
        </Page>
      </Router>
    </ProvideAuth>
  );
}
