import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PageNumberDisplay from "./PageNumberDisplay";
import DownloadButton from "./DownloadButton";
import BackToFormButton from "./BackToFormButton";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface DisplayPDFProps {
  pdf: Blob;
  onBackToForm: () => void;
}

export default function DisplayPDF({ pdf, onBackToForm }: DisplayPDFProps) {
  //Avoiding recreating the object URL on each render for performance reasons.
  //Only recreate when the pdf prop changes.
  const pdf_url = useMemo(() => URL.createObjectURL(pdf), [pdf]);
  const [num_pages, set_num_pages] = useState<number>(0);
  const [page_width, set_page_width] = useState<number>(800);
  const card_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update_width = () => {
      if (card_ref.current) {
        //Getting the real width of the card container to center the PDF properly.
        const available_width = card_ref.current.clientWidth;
        const max_width = 900;
        set_page_width(Math.min(max_width, available_width));
      }
    };

    update_width();
    window.addEventListener("resize", update_width);
    return () => {
      window.removeEventListener("resize", update_width);
    };
  });

  //Avoiding unrelated stuff to run when pdf_url changes.
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(pdf_url);
    };
  }, [pdf_url]);

  function on_document_load_success({ numPages }: { numPages: number }) {
    set_num_pages(numPages);
  }

  return (
    <>
      <div
        className="container-fluid 
                    d-flex 
                    align-items-center 
                    justify-content-center 
                    bg-light py-4"
      >
        <div
          ref={card_ref}
          className="shadow-lg 
                    p-3 
                    p-sm-4 
                    bg-white 
                    rounded-1 
                    w-100 
                    mx-auto 
                    d-flex 
                    flex-column 
                    align-items-center"
          style={{ maxWidth: 900 }}
        >
          <div className="d-flex justify-content-center">
            <Document file={pdf_url} onLoadSuccess={on_document_load_success}>
              <Page
                pageNumber={1} // As for now, there is just one page. Avoiding to create  a state for current page.
                width={page_width}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
          <PageNumberDisplay current_page={1} total_pages={num_pages} />
        </div>
      </div>
      <div className="d-flex justify-content-center gap-2 mt-3">
        <BackToFormButton onClick={onBackToForm} />
        <DownloadButton pdfBlob={pdf} filename={"KYC_Form.pdf"} />
      </div>
    </>
  );
}
