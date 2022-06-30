import React from "react";

export default function SignIn() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/sign-in")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Sign in </h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}
