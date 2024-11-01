const DetailsSkeleton = () => {
  return (
    <div className="relative h-fit w-full ">
      <div className="relative placeholder-wave">
        <div className="opacity-40 w-full aspect-[7/4] object-center min-h-[500px] placeholder"></div>  
        <div className="absolute _carouselGradient w-full bottom-0 h-full"></div>
      </div>
      <div className="absolute top-0 pb-[100px] w-full placeholder-wave">
        <div className="lg:mt-[500px] md:mt-[400px] mt-[200px] mx-auto w-[90%]">
          <div className="md:flex gap-8">
            <div className="lg:w-[350px] md:w-[280px] sm:w-[250px] w-[200px] h-fit placeholder aspect-[3/4] "></div>
            <div className="w-full">
              <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl placeholder w-[50%] ">
              </h1>
              <div className="lg:text-xl md:text-lg sm:text-md text-sm  text-slate-300 mt-2">
                <h2 className="placeholder w-[30%]"></h2>
                <h2 className="placeholder w-[95%]"></h2>
                <h2 className="placeholder w-[90%]"></h2>
                <h2 className="placeholder w-[60%]"></h2>
                <div className="flex flex-col md:gap-3 sm:gap-2 gap-1 mt-4 text-zinc-300">
                  <h2 className="placeholder w-[35%]">
                  </h2>
                  <h2 className="placeholder w-[30%]"></h2>
                  <h2 className="placeholder w-[30%]"></h2>
                  <h2 className="placeholder w-[30%]"></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
