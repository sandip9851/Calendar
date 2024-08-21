import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalData } from "../store/context";

function Details() {
  const { dis } = useContext(GlobalData);

  return (
    <div className="details">
      {dis ? (
        <>
          <h4>
            {dis.title}{" "}
            <span class="badge rounded-pill text-bg-primary">{dis.type}</span>
          </h4>
          <p>{dis.details}</p>
        </>
      ) : (
        <p>No event details available.</p>
      )}
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Details;
