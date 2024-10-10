const Loading = ({ progress }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#1c1c1c] z-50">
      {/* Progress Bar */}
      <div className="w-full h-1 absolute top-0">
        <div
          className="bg-white h-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Centered Logo and Text */}
      <div className="flex flex-col items-center mt-10">
        <span className="text-2xl font-neue font-bold">KD○</span>       
        <p className="text-white mt-4">Loading your experience...</p>
      </div>

      <style jsx>{`
        .progress-bar {
          height: 2px;
          transition: width 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default Loading;
