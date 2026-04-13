export default function AdminLayout({ children }: any) {
  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6">

        <h2 className="text-2xl font-bold mb-8">
          HUMRISE ADMIN
        </h2>

        <nav className="space-y-4">

          <a href="/admin" className="block hover:text-gray-200">
            Dashboard
          </a>

          <a href="/admin/campaigns" className="block hover:text-gray-200">
            Campaigns
          </a>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">

        {children}

      </main>

    </div>
  );
}