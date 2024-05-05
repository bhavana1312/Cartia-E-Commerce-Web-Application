import "./DownloadItem.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// Components
import DownloadModal from "../components/DownloadModal";

const DownloadItem = ({ item }) => {
  const [modal, setModal] = useState(false);

  async function downloadFile() {
    axios({
      url: `/uploads/${item.download_link}`,
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      // Create file link in browser's memory
      const href = URL.createObjectURL(response.data);

      // Create "a" HTML element with href to file & click
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", `${item.download_link}`);
      link.download = `/uploads/${item.download_link}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  return (
    <div className="downloaditem">
      <div className="downloaditem-image">
        <img src={`/images/${item.image1}`} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="downloaditem-name">
        <p>{item.name}</p>
      </Link>
      <div className="downloaditem-btn-container">
        <button
          onClick={() => {
            downloadFile();
            setModal(true);
          }}
          className="btn-download"
        >
          <i className="fa-solid fa-download"></i>Download
        </button>
        <DownloadModal
          key={item.product}
          item={item}
          visible={modal}
          setVisible={setModal}
        />
      </div>
    </div>
  );
};

export default DownloadItem;
