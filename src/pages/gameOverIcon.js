import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy, faFaceGrinStars } from "@fortawesome/free-solid-svg-icons";

export const gameOverIcon = (
  <div>
    <FontAwesomeIcon icon={faFaceDizzy} style={{ fontSize: "70px", color: "black" }} />
  </div>
);

export const winGameIcon = (
  <div>
    <FontAwesomeIcon icon={faFaceGrinStars} style={{ fontSize: "70px", color: "gold" }} />
  </div>
);