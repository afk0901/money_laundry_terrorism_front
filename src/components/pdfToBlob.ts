import { pdf } from "@react-pdf/renderer"
import { ReactElement } from "react"

async function pdftoBlob(comp : ReactElement) {
    const blob = await pdf(comp).toBlob()
    return blob
}

export {pdftoBlob}