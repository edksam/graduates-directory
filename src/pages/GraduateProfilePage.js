import React, { useState, useEffect } from "react";
import { GraduateContext } from "../context/graduate-context";
import { useAuth0 } from "@auth0/auth0-react";
import GraduateProfile from "../components/gradProfile";


const { useContext } = React;

const GraduateProfilePage = ({ match }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(GraduateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { _id } = match.params; // Grab URL _id

    if (_id) {
      const graduateProfile = state.graduates.find((graduate) => {
              return graduate._id === _id;
      });
      dispatch({
        type: "FETCH_GRADUATE",
        payload: graduateProfile,
      });
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params, dispatch]);
  if (!state.graduate) return loading;

  console.log(user)

  console.log(state.graduate.fullname);
  return <GraduateProfile graduate={state.graduate} />;

};

export default GraduateProfilePage;
