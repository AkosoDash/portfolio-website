const ContentWrapper = ({ children }) => {
  return (
    <div className="w-[calc(100%-256px)] bg-[#212121] border border-white/10 rounded-lg mt-32 mb-8 h-min-screen mx-auto">
      {children}
    </div>
  );
};

export default ContentWrapper;
