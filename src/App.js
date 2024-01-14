import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./Components/Admin/AddService/AddService";
import AdminRoute from "./Components/Admin/AdminRoute/AdminRoute";
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
import Preloader from "./Components/Preloader/Preloader";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://me-auto-repair.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <AdminRoute path="/dashboard/manageServices">
            <ManageServices />
          </AdminRoute>
          <AdminRoute path="/dashboard/addService">
            <AddService />
          </AdminRoute>
          <AdminRoute path="/dashboard/allOrders">
            <AllOrders />
          </AdminRoute>
          <AdminRoute path="/dashboard/makeAdmin">
            <MakeAdmin />
          </AdminRoute>
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
            {services.length > 0 ? <Home services={services} /> : <Preloader />}
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
