import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/Others/NotFound/NotFound';
import AddService from './components/Admin/AddServices/AddServices';
import AllProducts from './components/Others/AllProducts/AllProducts';
import Login from './components/login/Login/Login';
import Register from './components/login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/Others/PrivateRouter/PrivateRouter';
import PlaceOrders from './components/Others/PlaceOrders/PlaceOrders';
import MyOrders from './components/Others/MyOrders/MyOrders';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/allProducts">
              <AllProducts></AllProducts>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrders/:productId">
              <PlaceOrders></PlaceOrders>
            </PrivateRoute>
            <PrivateRoute path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route path="/AddServices">
              <AddService></AddService>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
