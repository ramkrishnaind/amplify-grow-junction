import { useState, useEffect } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import styles from "../styles/Home.module.css";
import { listTodos } from "../src/graphql/queries";
import { Auth, Hub } from "aws-amplify";
import Login from "./auth/Login";
import Register from "./auth/Register";
import DashboardPage from "./Dashboard";

const Home = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const authListener = async () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          setIsLoggedIn(true);
          break;
        case "signOut":
          setIsLoggedIn(false);
          break;
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
    } catch (error) {}
  };
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await API.graphql({
      query: listTodos,
    });
    setTodos(response.data.listTodos.items);
  };
  useEffect(() => {
    authListener();
    fetchTodos();
  }, []);
  return (
    // <>
    //   <div>
    //     {todos.map((item) => {
    //       return (
    //         <div key={item}>
    //           <h1>{item.name}</h1>
    //           <h3>{item.description}</h3>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   {/* <AmplifySignOut /> */}
    // </>
    <DashboardPage />
  );
};
export default Home;
