import { useState, useEffect } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import styles from "../styles/Home.module.css";
import { listTodos } from "../src/graphql/queries";
import { Auth, Hub } from "aws-amplify";
import Login from "./auth/Login";
import Register from "./auth/Register";
import DashboardPage from "./Dashboard";
import { useDispatch } from "react-redux";
import useWindowDimensions from "../public/utils/useWindowDimensions";
import ACTION_KEYS from "../constants/action-keys";

const Home = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch();
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
    dispatch({ type: ACTION_KEYS.WINDOWLAYOUT, payload: { height, width } });

    authListener();
    fetchTodos();
  }, []);
  return <DashboardPage />;
};
export default Home;
