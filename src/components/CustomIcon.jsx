import { Icon } from "@iconify/react";
import React from "react";

const CustomIcon = ({ onClick, title }) => {
  return (
    <div className="location-marker">
      <Icon icon={title === "Floods" ? "material-symbols-light:flood-rounded" : "maki:volcano"} className="location-icon" onClick={onClick} />
    </div>
  );
};

export default CustomIcon;
