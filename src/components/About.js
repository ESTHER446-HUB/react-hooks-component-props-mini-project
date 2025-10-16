
import React from "react";

export default function About({
  image = "https://via.placeholder.com/215",
  about = "This is the blog about React.",
}) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

