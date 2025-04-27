import SectionTitle from "../Common/SectionTitle";

const Features = () => {
  // You can customize the image URLs based on your needs
  const imageUrls = [
    "/images/features/image.jpg", // Replace with actual image paths
    "/images/features/logo.png", // Replace with actual image paths
    "/images/features/image22.png", // Replace with actual image paths
  ];

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Gallery"
          paragraph="Our Team ensures smooth, timely, and disruption-free shell collection.
          We Offer competitive pricing and handle all transportation."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {imageUrls.map((url, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src={url}
                alt={`Feature ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              {/* Optional overlay or additional content */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
