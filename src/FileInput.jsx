import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function FileInput(props) {
  const { setTitle, setDate, setSpeaker, setFormId, setEmail, setPassword } =
    props;

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("The onabort is exe");
      reader.onerror = () => console.log("The error is exe");
      reader.onload = (e) => {
        const content = JSON.parse(e.target.result);
        console.log(content);
        console.log("Yooooo");

        setTitle(content.seminarTitle);
        setDate(content.seminarDay);
        setSpeaker(content.speaker);
        setFormId(content.formId);
        setEmail(content.sender);
        setPassword(content.password);
      };

      reader.readAsText(file);
    });

    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      onDrop,
      accept: "application/json",
    });

  // fileContent && props.fnc(fileContent);

  return (
    <div className="file-input">
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>Drop the configuration here ...</div>
        ) : (
          <div>
            Drag 'n' drop some configuration here, or click to select
            configuration
          </div>
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
