import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import axiosInstance from "../../config/axiosInstance";

const Trailers = ({ movieId }: { movieId: string }) => {
  const [trailer, setTrailers] = useState<{ key: string; name: string }[]>([]);

  const options = {
    height: "200",
    width: "360",
  };

  const fectchTrailers = async () => {
    try {
      const response = await axiosInstance.get(
        `/${movieId}/videos?language=en-US`
      );
      const data = response.data;
      const trailerObj = data.results.filter(
        (obj: { type: string }) => obj.type === "Trailer"
      );
      // console.log(trailerObj);
      setTrailers(trailerObj);
    } catch (err) {
      toast.error("fetch trailers error");
    }
  };

  useEffect(() => {
    fectchTrailers();
  }, [movieId]);

  return (
    <motion.div className="">
      {trailer.length > 0 && (
        <div className="lg:mt-16 md:mt-10 mt-4">
          <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg  text-cyan-500 font-bold">
            Watch Trailers
          </h1>
          <div className="flex lg:gap-4 md:gap-3 gap-2 flex-wrap">
            {trailer.map((t, idx) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.5,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="flex flex-col gap-2 mt-4"
                  key={idx}
                >
                  <YouTube videoId={t.key} opts={options} />
                  <h1 className="text-xl w-[380px] line-clamp-1">{t.name}</h1>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Trailers;
