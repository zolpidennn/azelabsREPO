"use client"

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Voce esta offline</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Parece que voce perdeu a conexao com a internet. Verifique sua conexao e tente novamente.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
