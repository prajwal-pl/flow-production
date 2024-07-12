"use client";
import React, { useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";

import "@uploadcare/react-uploader/core.css";

type Props = {};

const UploadCareButton = (props: Props) => {
  return (
    <div>
      <FileUploaderRegular />
    </div>
  );
};

export default UploadCareButton;
