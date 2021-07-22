import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ProvideAuth, useAuth } from "context/auth";
import { ProvideGroup } from "context/group";
import { ProvideWishlist } from "context/wishlist";
import Login from "pages/Login";
import PersonnalSpace from "pages/PersonnalSpace";
import Group from "pages/Group";
import WishListInGroup from "pages/WishListInGroup";
import WishListAdmin from "pages/WishListAdmin";
import Page from "components/layout/Page";
import "index.css";

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  auth.user === null && auth.refreshUser();
  console.log(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user
          ? children
          : children
            // <Redirect
            //   to={{
            //     pathname: "/login",
            //     state: { from: location },
            //   }}
            // />
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
            <PrivateRoute path="/wishlist/:idWishlist">
              <ProvideWishlist>
                <WishListAdmin />
              </ProvideWishlist>
            </PrivateRoute>
          </Switch>
        </Page>
      </Router>
    </ProvideAuth>
  );
}
