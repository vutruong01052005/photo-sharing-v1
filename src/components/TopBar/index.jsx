import React from "react";
import { AppBar, Toolbar, Typography, } from "@mui/material";

import "./styles.css";
import { useMatch } from "react-router-dom";
import models from "../../modelData/models";
/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {
    const detailMatch = useMatch("/users/:userId");
    const photosMatch = useMatch("/photos/:userId");

    const userId = detailMatch?.params.userId ?? photosMatch?.params.userId;

    const user = userId ? models.userModel(userId) : null;

    let title = "Danh sách người dùng";

    if (user) {
        const fullName = `${user.first_name} ${user.last_name}`;

        title = photosMatch
        ? `Photos of ${fullName}`
        : fullName;
    }
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            Vũ Xuân Trường
          </Typography>

          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
