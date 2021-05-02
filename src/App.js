import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className="app">
      {true ? (
        <>
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
