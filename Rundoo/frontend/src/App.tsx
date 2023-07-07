import Home from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ConnectedRootLayout from "./components/RootLayout";
import ConnectedPopUpLoginForm from "./components/PopUpLoginForm";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordConfirm from "./components/ResetPasswordConfirm";
import Activate from "./components/Activate";
import { Provider } from "react-redux";
import store from "./store";
import { login, logout, signup } from "./actions/auth";
import { checkAuthenticated, load_user } from "./actions/auth";
import { LoggedIn } from "./components/LoggedIn";
import ConnectedLogOutButton from "./components/LogOutButton";
import ConnectedPopUpSignUpForm from "./components/PopUpSignUpForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ConnectedRootLayout func1={checkAuthenticated} func2={load_user} />}>
      <Route path="sign-up-popup" element={<ConnectedPopUpSignUpForm open={true} func={signup}/>} />
      <Route
        path="log-in-popup"
        element={<ConnectedPopUpLoginForm open={true} func={login} />}
      />
      <Route path="log-out" element={<ConnectedLogOutButton func={logout}/>} />
      <Route path="logged-in" element={<LoggedIn />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route
        path="password/reset/confirm/:uid/:token"
        element={<ResetPasswordConfirm />}
      />
      <Route path="activate/:uid/:token" element={<Activate />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
