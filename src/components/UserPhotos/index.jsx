import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const {userId} = useParams();
    const photos = models.photoOfUserModel(userId) ?? [];
    return (
      <>
        {photos.map((photo) => (
          <section key={photo._id}>
          <img
            src={require(`../../images/${photo.file_name}`)}
            alt="Ảnh người dùng"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p>
            Ngày đăng: {new Date(photo.date_time).toLocaleString("vi-VN")}
          </p>
          {(photo.comments ?? []).map((comment) => (
            <div key={comment._id}>
              <Link to={`/users/${comment.user._id}`}>
                {comment.user.first_name} {comment.user.last_name}
              </Link>
              <p>
                {new Date(comment.date_time).toLocaleString("vi-VN")}
              </p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </section>
        ))}
      </>
    );
}

export default UserPhotos;
