export default function Hero({ t }) {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {t.title}
      </h2>

      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        {t.subtitle}
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-medium">
          {t.workerBtn}
        </button>

        <button className="bg-secondary text-white px-6 py-3 rounded-xl font-medium">
          {t.companyBtn}
        </button>
      </div>
    </section>
  );
}
