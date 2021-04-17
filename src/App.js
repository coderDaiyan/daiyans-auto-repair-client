import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./Components/Admin/AddService/AddService";
import AllOrders from "./Components/Admin/AllOrders/AllOrders";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/Admin/ManageServices/ManageServices";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Order from "./Components/Dashboard/Order/Order";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import Review from "./Components/Dashboard/Review/Review";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard/manageServices">
            <ManageServices />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allOrders">
            <AllOrders />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/orders">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/order/:id">
            <Order />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
