import React from "react";

interface MoneyLaundryPDFDocumentProps {
  documentUrl: string;
  produce_document: (should_produce_document  : boolean) => void
}

const MoneyLaundryPDFDocument: React.FC<MoneyLaundryPDFDocumentProps> = ({
  documentUrl, produce_document
}) => {
    const go_back = () => {
        produce_document(false)
    }
  return (
    <>
      <div
        data-testid={"money_laundry_terrorism_document"}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
        }}
      >
        <object
          data={documentUrl}
          width="100%"
          height="100%" // Set the object's height to 100% of the container
        >
          <p>Úps! Nú fór eitthvað úrskeiðis! Ekki tókst að birta skjalið!</p>
        </object>
          <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={go_back}>Til Baka í yfirlit</button>
            </div>
      </div>
    </>
  );
};

export default MoneyLaundryPDFDocument;
