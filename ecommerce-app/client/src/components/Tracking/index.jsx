function Tracking({ status }) {
  const steps = [
    "Placed",
    "Packed",
    "Shipped",
    "Out for delivery",
    "Delivered",
  ];

  const current = steps.indexOf(status);

  return (
    <div className="flex gap-4 mt-6 flex-wrap">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`px-4 py-2 rounded-full ${
            index <= current
              ? "bg-green-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default Tracking;