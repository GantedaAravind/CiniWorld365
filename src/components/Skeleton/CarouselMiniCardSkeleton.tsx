const CarouselMiniCardSkeleton = () => {
  return (
    <div className="col-xl-12 col placeholder-wave">
      <div className="flex gap-2">
        <div className="w-[80px] placeholder aspect-[4/6]"></div>
        <div className="flex flex-col justify-between py-2 w-full">
          <div className="leading-5 w-full">
            <h1 className="w-[40%] placeholder"></h1>
            <h1 className="text-md w-[95%] placeholder"></h1>
            <h1 className="text-md w-[90%] placeholder"></h1>
            <h1 className="text-md w-[20%] placeholder"></h1>
          </div>
          <div className="flex items-center gap-1 placeholder w-[20%]"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselMiniCardSkeleton;
