import React from "react";
import { Link } from "react-router-dom";
import appWriteService from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    //It's like an <a> tag, but for single-page applications (SPA) using React.
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appWriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
