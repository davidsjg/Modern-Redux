//higher order component that wraps a component with auth
import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default (ChildComponent) => {
  const ComposedComponent = () => {
    const authState = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (!authState) {
        navigate("/");
      }
    }, [authState]);
    return <ChildComponent />;
  };

  return ComposedComponent;
};
