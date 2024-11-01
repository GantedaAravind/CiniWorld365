const MovieCardSkeleton = () => {
  return (
    <div className="my-3 rounded-lg  placeholder-wave">
      <div className="relative overflow-hidden">
        <div className="aspect-[3/4] placeholder w-full"></div>
        <div className="absolute -bottom-6 w-full h-28 _carouselGradient placeholder"></div>
      </div>
      <div className="p-2 w-full">
        <h1 className={"md:text-[17px] text-sm font-semibold line-clamp-1 placeholder w-[40%]"}>title</h1>
        <div className="md:text-[15px] text-[13px] mt-2">
          <h1 className="placeholder w-[30%]"></h1>
          <h1 className="placeholder w-[40%]"></h1>
          <h1 className="placeholder w-[35%]"></h1>
        </div>
      </div>
    </div>
  );
};
export default MovieCardSkeleton;
