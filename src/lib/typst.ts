import { $typst } from '@myriaddreamin/typst.ts'
import { TypstSnippet } from '@myriaddreamin/typst.ts/contrib/snippet'
import compilerWasm from '@myriaddreamin/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm?url'
import rendererWasm from '@myriaddreamin/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm?url'

const localFonts = [
  '/fonts/NewCM10-Regular.otf',
  '/fonts/NewCM10-Bold.otf',
  '/fonts/NewCM10-Italic.otf',
  '/fonts/NewCMMath-Regular.otf',
]

let configured = false

function configureTypst() {
  if (configured) {
    return
  }

  $typst.setCompilerInitOptions({
    getModule: () => compilerWasm,
  })
  $typst.setRendererInitOptions({
    getModule: () => rendererWasm,
  })
  $typst.use(
    TypstSnippet.disableDefaultFontAssets(),
    TypstSnippet.preloadFonts(localFonts),
  )
  configured = true
}

export async function renderTypstSvg(source: string) {
  configureTypst()
  return $typst.svg({ mainContent: source })
}

export async function exportTypstPdf(source: string) {
  configureTypst()
  const pdf = await $typst.pdf({ mainContent: source })

  if (!pdf) {
    throw new Error('Typst did not return a PDF.')
  }

  return pdf
}
