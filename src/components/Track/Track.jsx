import React from "react";
import { useParams } from "react-router-dom";
function Track() {
  // Get the userId param from the URL.
  const { userId } = useParams();

  return (
    <div>
      <p>TRACK ID:{userId}</p>
    </div>
  );
}

export default Track;
