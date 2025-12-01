import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router";

const PrivitePage = ({ children }) => {

  const { user, loading } = use(AuthContext);

  if(loading) {
    return <p>Loading.....</p>
  }

  if (user) {
    return children;
  } else {
    return <Navigate to={"/register"}></Navigate>;
  }
};

export default PrivitePage;
