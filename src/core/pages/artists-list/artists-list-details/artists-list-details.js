import React, { useContext, useEffect } from "react";
import "./artists-list-details.scss";

import AppContext from "../../../../contexts/app-context";
import Breadcrumb from "../../../../components/breadcrumbs/breadcrumbs";

const ArtistsListDetails = () => {
  const {
    queryState: [query],
    breadcrumbsState: [breadcrumbs, setBreadcrumbs],
  } = useContext(AppContext);

  useEffect(() => {
    setBreadcrumbs([
      { path: "/", name: "Home" },
      { path: `/artistList/${query}`, name: `Searching: ${query}` },
    ]);
  }, []);

  return (
    <section className="artists-list-details">
      <h1 className="artists-list-details__title">Artists</h1>
      <h4 className="artists-list-details__subtitle">
        You are currently searching for "{query}"
      </h4>
      <Breadcrumb breadcrumbs={breadcrumbs} />
    </section>
  );
};

export default ArtistsListDetails;
