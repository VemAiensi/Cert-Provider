import React, { useState } from "react";

function CerThumbnail({ imgSrc, active, clickFnc, certNum }) {
  function handleClick() {
    console.log(`Cert ${certNum} theme is now in use.`);
    clickFnc(certNum);
  }

  return (
    <button
      className={"cert-thumbnail " + (active ? "cert-active" : "cert-inactive")}
      onClick={handleClick}
    >
      <img src={imgSrc} />
    </button>
  );
}

export default CerThumbnail;
