const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[88vh] bg-base-300 p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-base-content">
          Welcome to Vendor Management System
        </h1>
        <p className="text-base sm:text-lg mb-6 text-base-content">
          Efficiently manage your vendors with our comprehensive system.
          Streamline your procurement processes and enhance your vendor
          relationships.
        </p>
        <a href="/get-started" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HomePage;
