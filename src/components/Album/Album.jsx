import React from "react";
import { useParams } from "react-router-dom";

function Album() {
  // Get the userId param from the URL.
  const { albumId } = useParams();

  return (
    <div>
      <p>ALBUM ID:{albumId}</p>
    </div>
  );
}

export default Album;
