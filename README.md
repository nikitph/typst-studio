# Typst Studio

A browser-only Typst writing environment built with Vite, React, TypeScript, and shadcn-style UI primitives.

Typst Studio lets you open or drop in a `.typ` document, edit it with a live WebAssembly preview, and export a PDF without sending the document to a server.

## Features

- Local `.typ` file import by picker or drag and drop
- Starter templates for papers, theses, and letters
- Debounced live SVG preview powered by Typst WASM
- In-browser PDF export
- Bundled local fonts for offline-safe compilation
- Production service worker that caches the app shell, fonts, and WASM assets after first load
- No account, LaTeX install, or server-side compilation step

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm lint
pnpm build
```

The production build emits the Typst compiler and renderer WASM into `dist/assets`, while static fonts are copied from `public/fonts`.
