export default function HowItWorks() {
  return (
    <section className="bg-white py-16 px-6">
      <h3 className="text-center text-2xl font-bold mb-12 text-gray-900">
        How It Works
      </h3>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-primary text-4xl mb-3">1</div>
          <h4 className="font-semibold mb-2">Register</h4>
          <p className="text-gray-500 text-sm">
            Sign up using your mobile number and Aadhaar.
          </p>
        </div>

        <div>
          <div className="text-primary text-4xl mb-3">2</div>
          <h4 className="font-semibold mb-2">Get Verified</h4>
          <p className="text-gray-500 text-sm">
            Receive your verified digital worker ID.
          </p>
        </div>

        <div>
          <div className="text-primary text-4xl mb-3">3</div>
          <h4 className="font-semibold mb-2">Choose Work</h4>
          <p className="text-gray-500 text-sm">
            Select part-time or full-time jobs near you.
          </p>
        </div>

        <div>
          <div className="text-primary text-4xl mb-3">4</div>
          <h4 className="font-semibold mb-2">Start Earning</h4>
          <p className="text-gray-500 text-sm">
            Get paid safely and on time.
          </p>
        </div>
      </div>
    </section>
  );
}
