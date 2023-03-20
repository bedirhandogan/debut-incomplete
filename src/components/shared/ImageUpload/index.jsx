import './styles.scss';

function ImageUpload({ reference, handleInputFocus, handleUpload, children, style, label }) {
  return (
    <div className={'image-upload'} onClick={handleInputFocus} style={style}>
      {children}
      <div className={'image-upload-hover'}>{label}</div>
      <input type={'file'} ref={reference} onChange={handleUpload} />
    </div>
  );
}

export default ImageUpload;
