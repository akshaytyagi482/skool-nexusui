import Image from "next/image";

export default function DashboardSection() {
  return (
    <section className="max-w-6xl  mx-auto px-8">
      <div className="max-w-6xl shadow-xl mx-auto grid rounded-xl bg-[#FBEFF3] py-8 lg:grid-cols-2 gap-12 px-6">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          
          {/* Icon */}
          
            <Image src="/pic1.svg" alt="dashboard icon" width={55} height={55} />
          

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>

          {/* Subtitle */}
          <p className="mt-2 text-gray-700">
            Real-time analytics & school performance tracking.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-lg">✔</span>
              Customizable widgets for key metrics
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-600 text-lg">✔</span>
              Real-time attendance and fee collection stats
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-600 text-lg">✔</span>
              Performance analytics with visual charts
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-600 text-lg">✔</span>
              Personalized dashboards for different user roles
            </li>
          </ul>

          {/* Button */}
          <button className="mt-8 bg-indigo-600 text-white px-6 py-3 w-fit rounded-lg shadow hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGE */}
          <div className="bg-[#FBEFF3] rounded-2xl  w-full">
            <Image
              src="/sideimage.svg"
              alt="Dashboard Preview"
              width={850}
              height={800}
              className="rounded-xl"
            />

            

        </div>

      </div>
    </section>
  );
}
