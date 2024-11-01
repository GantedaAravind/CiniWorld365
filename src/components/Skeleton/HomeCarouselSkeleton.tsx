const HomeCarouselSkeleton = () => {
  return (
    <div className={"h-full"}>
      <div className="relative h-full placeholder-wave">
        <div className="w-full h-full object-cover min-h-[300px] aspect-[7/4]  placeholder"></div>
        <div className="h-full w-full top-0 left-0 bg-black absolute hover:opacity-[0.2] opacity-[0]"></div>
        <div className="absolute bottom-0 h-24 bg-blue-300 w-full _carouselGradient "></div>
      </div>
      <div className="absolute bottom-0 items-end md:flex px-4 gap-4 w-full  placeholder-wave">
        <div className="md:w-[160px] w-[120px] aspect-[4/5] placeholder"></div>
        <div className="flex flex-col gap-1 w-full">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl placeholder w-[45%] border"></h1>
          <h2 className="w-[95%] lg:text-xl md:text-lg  text-md md:line-clamp-3 line-clamp-2 placeholder"></h2>
          <h2 className="w-[90%] lg:text-xl md:text-lg  text-md md:line-clamp-3 line-clamp-2 placeholder"></h2>
          <h2 className="w-[70%] lg:text-xl md:text-lg  text-md md:line-clamp-3 line-clamp-2 placeholder"></h2>
          <div className="flex items-center gap-1 lg:text-lg md:text-md text-sm w-[20%] placeholder">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarouselSkeleton;
