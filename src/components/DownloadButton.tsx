import React from "react";

interface DownloadButtonProps {
  pdfBlob: Blob;
  filename?: string;
}
//TODO: Maybe make this more simple?
const DownloadButton: React.FC<DownloadButtonProps> = ({
  pdfBlob,
  filename = "KYC_Form.pdf",
}) => {
  const handleDownload = () => {
    const url = window.URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload} className="btn btn-primary" type="button">
      Hlaða niður PDF
    </button>
  );
};

export default DownloadButton;
