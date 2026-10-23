import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";

import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const {userId} = useParams();
    const user = models.userModel(userId);
    if(!user) {
      return (
        <p>User not found!</p>
      )
    }
    return (
        <>
          <h2>User Details </h2>
          <h2>{user.first_name} {user.last_name}</h2>
          <p>Location: {user.location}</p>
          <p>Description: {user.description}</p>
          <p>Occupation: {user.occupation}</p>
          <Link to = {`/photos/${user._id}`}>View Photos</Link>
        </>
    );
}

export default UserDetail;
