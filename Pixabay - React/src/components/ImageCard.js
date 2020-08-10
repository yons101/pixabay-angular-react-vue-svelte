import React from "react";

export default function ImageCard({ image }) {
  return (
    <div className="col-sm-6 col-lg-4 mb-4 ">
      <a href={image.pageURL} target="_blank" rel="noopener noreferrer">
        <div className="card text-center ">
          <img className="card-img-top" src={image.webformatURL} alt="" />
          <div className="card-body p-2 ">
            <span className="badge badge-dark mr-1">
              <i className="fas fa-eye mr-1" />
              {image.views}
            </span>
            <span className="badge badge-danger mr-1">
              <i className="fas fa-heart mr-1" />
              {image.likes}
            </span>
            <span className="badge badge-primary">
              <i className="fas fa-arrow-down mr-1" />
              {image.downloads}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
