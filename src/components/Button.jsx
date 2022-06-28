import { Link } from "react-router-dom";

export default function Button({ text, white, to }) {
  return (
    <Link to={to} className={`btn ${white && "btn-white"}`}>
      {text}
    </Link>
  );
}
