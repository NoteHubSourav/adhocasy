export default function Earnings() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h3 className="text-center text-2xl font-bold mb-10 text-gray-900">
        How Much Can You Earn?
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white rounded-2xl shadow p-6 w-72">
          <p className="text-gray-500 text-sm">Delivery Partner</p>
          <p className="text-3xl font-bold text-primary mt-2">₹18,500</p>
          <p className="text-gray-400 text-sm mt-1">per month</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 w-72">
          <p className="text-gray-500 text-sm">Warehouse Helper</p>
          <p className="text-3xl font-bold text-primary mt-2">₹650</p>
          <p className="text-gray-400 text-sm mt-1">per day</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 w-72">
          <p className="text-gray-500 text-sm">Event Staff</p>
          <p className="text-3xl font-bold text-primary mt-2">₹420</p>
          <p className="text-gray-400 text-sm mt-1">per hour</p>
        </div>
      </div>
    </section>
  );
}
