"use client";
import React, { useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";

import "@uploadcare/react-uploader/core.css";

type Props = {};

const UploadCareButton = (props: Props) => {
  const [files, setFiles] = useState([]);

  const handleChangeEvent = (items: never) => {
    setFiles([...items.allEntries.filter((file) => file.status === "success")]);
  };

  return (
    <div>
      <FileUploaderRegular onChange={handleChangeEvent} />
    </div>
  );
};

export default UploadCareButton;
