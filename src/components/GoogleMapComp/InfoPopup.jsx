const InfoPopup = ({ info, closeModal }) => {
  return (
    <div className="location-info">
      <div className="close-btn" onClick={() => closeModal()}>
        x
      </div>
      <h2>{info?.header || "Volcano"}</h2>
      <ul>
        <li>
          <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default InfoPopup;
