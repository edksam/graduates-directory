import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import GraduateDetailPage from "../pages/GraduateDetailPage";
// import GraduateAdd from "../components/graduate-add";
import { flashErrorMessage } from "../components/flash-message";
import { GraduateContext } from "../context/graduate-context";

const GraduateInfoPage = ({ match }) => {
  const [state, dispatch] = useContext(GraduateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { _id } = match.params; // Grab URL _id

    if (_id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3030/graduates/${_id}`,
          );
          dispatch({
            type: "FETCH_GRADUATE",
            payload: response.data,
          });
          setLoading(false);
        } catch (error) {
          flashErrorMessage(dispatch, error);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [match.params, dispatch]);

  if (loading) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <GraduateDetailPage graduate={state.graduate} />
    </div>
  );
};

export default GraduateInfoPage;
