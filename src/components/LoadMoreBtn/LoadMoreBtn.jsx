import React from "react";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button
      className=" mt-24 font-Manrope text-sm font-semibold text-white px-6 py-3 bg-blue_primary hover:bg-blue_secondary rounded-xl"
      onClick={onClick}
    >
      Load more
    </button>
  );
}
