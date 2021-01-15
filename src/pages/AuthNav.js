// src/components/auth-nav.js

import React from "react";
import AuthenticationButton from "./AuthenticationButton";
import { Menu } from "antd";

const AuthNav = () => (
  <Menu.Item>
    <AuthenticationButton />
  </Menu.Item>
);

export default AuthNav;
