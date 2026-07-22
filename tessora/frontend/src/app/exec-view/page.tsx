export default function ExecView() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Executive Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border border-current">
          <h2 className="font-semibold mb-2">Documents Indexed</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="p-6 rounded-lg border border-current">
          <h2 className="font-semibold mb-2">Queries Today</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="p-6 rounded-lg border border-current">
          <h2 className="font-semibold mb-2">Active Users</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
      <div className="mt-8 p-6 rounded-lg border border-current">
        <h2 className="font-semibold mb-4">Latest Briefing</h2>
        <p className="opacity-70">No briefings yet. Upload documents to get started.</p>
      </div>
    </main>
  );
}
