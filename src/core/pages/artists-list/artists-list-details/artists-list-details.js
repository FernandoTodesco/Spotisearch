import React, { useContext, useEffect } from "react";
import "./artists-list-details.scss";

import AppContext from "../../../../contexts/app-context";
import Breadcrumb from "../../../../components/breadcrumbs/breadcrumbs";
import Backdrop from "../../../../components/backdrop/backdrop";

const ArtistsListDetails = ({ props }) => {
  const {
    queryState: [query],
    breadcrumbsState: [breadcrumbs, setBreadcrumbs],
    searchingState: [searching, setSearching],
  } = useContext(AppContext);

  useEffect(() => {
    setBreadcrumbs([
      { path: "/", name: "Home" },
      { path: `/artistList/${query}`, name: `Searching: ${query}` },
    ]);
  }, []);

  return (
    <section className="artists-list-details">
      {searching && <Backdrop props={props} />}
      <h1 className="artists-list-details__title">Artists</h1>
      <h4 className="artists-list-details__subtitle">
        You are currently searching for "{query}"
      </h4>
      <div id="artists-list__breadcrumbs">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
    </section>
  );
};

export default ArtistsListDetails;
