import React from "react";
import PropTypes from "prop-types";

import Dropzone from "react-dropzone";

const FileUpload = props => {
  const { uploadFile, name, stateName} = props;
  const sendImage = (file) => {
    uploadFile(file, name, stateName);
  }
  return (
    <Dropzone
      accept="image/*"
      disabled={props.activity}
      multiple={props.multiple}
      onDrop={async ([file]) => {
        sendImage(file)
      }}
      maxSize={2097152}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()} className={props.className}>
            <input {...getInputProps()} />
            {props.element}
            {!props.hideMessage && (
              <p>
                {props.message ||
                  "Drag and drop some files here, or click to select files"}
              </p>
            )}
          </div>
        </section>
      )}
    </Dropzone>
  );
};

FileUpload.defaultProps = {
  multiple: false
};

FileUpload.propTypes = {
  activity: PropTypes.bool,
  multiple: PropTypes.bool,
  hideMessage: PropTypes.bool,
  element: PropTypes.element,
  message: PropTypes.string,
  className: PropTypes.string,
  sectionClassName: PropTypes.string,
  onDrop: PropTypes.func
};

export default FileUpload;
