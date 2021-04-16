import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Order from "./Components/Dashboard/Order/Order";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import Review from "./Components/Dashboard/Review/Review";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const OrderDataContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [orderData, setOrderData] = useState({
    paymentId: "",
    name: "",
    email: "",
    service: "",
    notes: "",
    status: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <OrderDataContext.Provider value={[orderData, setOrderData]}>
        <Router>
          <Switch>
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
          </Switch>
        </Router>
      </OrderDataContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
