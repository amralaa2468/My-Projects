import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

export default function PostPage() {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="card-title my-4 text-center">{postInfo.title}</h1>
          <div className="text-center">
            <time className="small text-muted">
              {formatISO9075(new Date(postInfo.createdAt))}
            </time>
          </div>
          <div className="text-center small font-weight-bold mb-2">
            Created by @{postInfo.author.username}
          </div>
          {userInfo.id === postInfo.author._id && (
            <div className="edit-row text-center mb-3">
              <Link
                className="edit-btn bg-dark text-white small text-decoration-none py-2 px-3 mt-3 rounded"
                to={`/edit/${postInfo._id}`}
              >
                <FontAwesomeIcon icon={faPencilAlt} className="mr-2" /> Edit
                this post
              </Link>
            </div>
          )}
          <div className="card p-3">
            <img
              className="card-img-top"
              src={`http:///localhost:4000/${postInfo.cover}`}
              alt="cover"
            />

            <div className="card-body">
              <div
                className="card-text"
                dangerouslySetInnerHTML={{ __html: postInfo.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
