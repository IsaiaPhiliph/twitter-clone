import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/user/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase/config";
import { useEffect, useState } from "react";
import { Oval } from "react-loading-icons";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      }
    });
    return () => {
      unsuscribe();
    };
  }, [dispatch]);
  console.log(user);
  // auth.signOut();
  return (
    <div className="app">
      {loading && (
        <div className="app__loading">
          <Oval />
        </div>
      )}
      {user ? (
        <>
          {}
          <Sidebar />
          <Feed />
          <Widgets />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}
export default App;
