import React from "react";
import { useParams } from "react-router-dom";
function Artist() {
  // Get the userId param from the URL.
  const { artistId } = useParams();
  return (
    <div>
      <p>ARTIST ID:{artistId}</p>
    </div>
  );
}

export default Artist;
