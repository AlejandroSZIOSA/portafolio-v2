import React from "react";

export default function GitBtn({ gitHubLink = "#" }) {
  return (
    <a href={gitHubLink}>
      <img
        className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
        src="icons/git-cat-orange.svg"
        alt="LinkedIn"
        width="42"
        height="auto"
      />
    </a>
  );
}
