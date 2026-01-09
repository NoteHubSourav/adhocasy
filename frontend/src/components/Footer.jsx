export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg mb-3">
            ADHOCASY
          </h4>
          <p className="text-sm text-gray-400">
            On-demand workforce platform helping workers earn more and
            companies hire faster.
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">For Workers</h5>
          <ul className="space-y-2 text-sm">
            <li>Find Jobs</li>
            <li>Part-Time Work</li>
            <li>Full-Time Work</li>
            <li>Earnings Dashboard</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">For Companies</h5>
          <ul className="space-y-2 text-sm">
            <li>Hire Workers</li>
            <li>Post Jobs</li>
            <li>Manage Hiring</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} ADHOCASY. All rights reserved.
      </div>
    </footer>
  );
}
