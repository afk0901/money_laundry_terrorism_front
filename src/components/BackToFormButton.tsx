import React from "react";

interface BackToFormButtonProps {
  onClick: () => void;
}

const BackToFormButton: React.FC<BackToFormButtonProps> = ({ onClick }) => (
  <button
    type="button"
    className="btn btn-secondary"
    onClick={onClick}
    id="back-to-form"
  >
    Til baka í skref 1
  </button>
);

export default BackToFormButton;
