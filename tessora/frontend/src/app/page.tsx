export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Tessora</h1>
      <p className="text-lg opacity-70 mb-8">
        Enterprise Document Intelligence
      </p>
      <div className="flex gap-4">
        <a
          href="/exec-view"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Executive Dashboard
        </a>
        <a
          href="/staff-view"
          className="px-6 py-3 rounded-lg border border-current hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Staff Portal
        </a>
      </div>
    </main>
  );
}
