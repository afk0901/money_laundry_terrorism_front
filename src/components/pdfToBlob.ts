import { pdf } from "@react-pdf/renderer"
import { ReactElement } from "react"

async function pdftoBlob<P extends object>(comp: ReactElement<P>) {
    const blob = await pdf(comp).toBlob()
    return blob
}

export {pdftoBlob}