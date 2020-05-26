import React from "react";
import "./breadcrumbs.scss";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumb">
      {breadcrumbs.map((breadcrumb) => (
        <Link
          className="breadcrumb__item"
          to={`${breadcrumb.path}`}
          key={breadcrumb.path}
        >
          <span>{breadcrumb.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
