const LeftSection = () => {
  return (
    <div className="h-screen">
      <div className="relative h-full">
        <img
          src="/images/auth-img.png"
          alt="auth-img"
          className="w-full h-full object-fill"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-[#F4F9FD4D]"></div>
      </div>
    </div>
  );
};

export default LeftSection;
