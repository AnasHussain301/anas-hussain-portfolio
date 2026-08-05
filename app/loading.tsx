export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"></div>
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    </main>
  );
}