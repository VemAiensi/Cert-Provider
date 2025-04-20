import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function FileInput(props) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("The onabort is exe");
      reader.onerror = () => console.log("The error is exe");
      reader.onload = (e) => {
        console.log(e.target.result);
        props.setSignPath(e.target.result);
      };

      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      onDrop,
      accept: "image/*",
    });

  // fileContent && props.fnc(fileContent);

  return (
    <div className="image-input">
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>Drop the signature here...</div>
        ) : (
          <div>Dean Signature</div>
        )}
      </div>

      {acceptedFiles[0] && ( // Conditionally render file information
        <div className="file-info">
          {acceptedFiles[0].name}
          {/* <p>File Size: {selectedFile.size} bytes</p> */}
          {/* ... other file info ... */}
        </div>
      )}
    </div>
  );
}

export default FileInput;
