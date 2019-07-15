import React from "react";
import { Link } from "react-router-dom";

export default function PageIndicator(props) {
  const indicator = props.indicator;
  const page = props.page;
  var pageIndexing = {
    one: (
      <div className="txt-page">
        <p className="page-active">{page}</p>
        <p>
          <Link to={indicator + `/${page + 1}`}>{page + 1}</Link>
        </p>
        <p>
          <Link to={indicator + `/${page + 2}`}>{page + 2}</Link>
        </p>
        <p>
          <Link to={indicator + `/${page + 3}`}>{page + 3}</Link>
        </p>
        <p>...</p>
      </div>
    ),
    two: (
      <div className="txt-page">
        <p>
          <Link to={indicator + `/${page - 1}`}>{page - 1}</Link>
        </p>
        <p className="page-active">{page}</p>
        <p>
          <Link to={indicator + `/${page + 1}`}>{page + 1}</Link>
        </p>
        <p>
          <Link to={indicator + `/${page + 2}`}>{page + 2}</Link>
        </p>
        <p>...</p>
      </div>
    ),
    max_1: (
      <div className="txt-page">
        <p>...</p>
        <p>
          <Link to={indicator + `/${page - 2}`}>{page - 2}</Link>
        </p>
        <p>
          <Link to={indicator + `/${page - 1}`}>{page - 1}</Link>
        </p>
        <p className="page-active">{page}</p>
        <p>
          <Link to={indicator + `/${page + 1}`}>{page + 1}</Link>
        </p>
      </div>
    ),
    max: (
      <div className="txt-page">
        <p>...</p>
        <p>
          <Link to={indicator + `/${page - 3}`}>{page - 3}</Link>
        </p>
        <p>
          <Link to={indicator + `/${page - 2}`}>{page - 2}</Link>
        </p>
        <p>
          <Link to={indicator + `/${page - 1}`}>{page - 1}</Link>
        </p>
        <p className="page-active">{page}</p>
      </div>
    ),
    else: (
      <div className="txt-page">
        <p>...</p>
        <p>
          <Link to={indicator + `/${page - 1}`}>{page - 1}</Link>
        </p>
        <p className="page-active">{page}</p>
        <p>
          <Link to={indicator + `/${page + 1}`}>{page + 1}</Link>
        </p>
        <p>...</p>
      </div>
    )
  };
  return (
    <div className={"page-indicator " + indicator.substring(1, 8)}>
      <button
        style={page === 1 ? { opacity: "0", visibility: "hidden" } : null}
        className="btn-page btn-prv"
      >
        <Link to={indicator + `/${page - 1}`}>
          <i className="fas fa-long-arrow-alt-left" /> Previous
        </Link>
      </button>
      {page === 1 && pageIndexing.one}
      {page === 2 && pageIndexing.two}
      {page === props.totalPages - 1 && pageIndexing.max_1}
      {page === props.totalPages && pageIndexing.max}
      {page > 2 && page < props.totalPages - 1 && pageIndexing.else}
      <button
        style={
          page === props.totalPages
            ? { opacity: "0", visibility: "hidden" }
            : null
        }
        className="btn-page btn-nxt"
      >
        <Link to={indicator + `/${page + 1}`}>
          Next <i className="fas fa-long-arrow-alt-right" />
        </Link>
      </button>
    </div>
  );
}
