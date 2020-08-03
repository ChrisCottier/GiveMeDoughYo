import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserInfo } from "../actions/users";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUserInfo(id));
  });

  if (!user) {
    return null;
  }

  console.log(user);

  return <div>{user.firstName}</div>;
};

export default User;
