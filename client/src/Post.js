import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <Link to={`/post/${_id}`} className="text-decoration-none">
            <img
              src={"http://localhost:4000/" + cover}
              alt="voice assistant"
              className="card-img img-fluid h-100"
            />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link
              to={`/post/${_id}`}
              className="text-decoration-none text-dark"
            >
              <h2 className="card-title">{title}</h2>
            </Link>
            <p className="card-text">
              <small className="text-muted">
                <a className="author text-decoration-none text-dark">
                  {"By @" + author.username}
                </a>
                <time className="mx-4">
                  {formatISO9075(new Date(createdAt))}
                </time>
              </small>
            </p>
            <p className="card-text">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
