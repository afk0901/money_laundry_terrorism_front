import { pdf } from "@react-pdf/renderer"
// eslint-disable-next-line no-unused-vars
import type { ReactElement } from "react"

async function pdftoBlob<P extends object>(comp: ReactElement<P>) {
    const blob = await pdf(comp).toBlob()
    return blob
}

export {pdftoBlob}