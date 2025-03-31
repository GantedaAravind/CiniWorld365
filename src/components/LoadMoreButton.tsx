import { useRef, useEffect } from "react";

interface LoadMoreButtonProps {
  title?: string;
  callback?: () => void;
}

const LoadMoreButton = ({
  title = "No More Movies",
  callback,
}: LoadMoreButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const targetElement = buttonRef.current;

    function observerCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          callback?.();
        }
      });
    }

    const options: IntersectionObserverInit = {
      rootMargin: "300px 0px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [callback]);

  return (
    <div className="relative">
      <button
        className="md:text-xl flex mx-auto sm:text-lg text-md font-medium border-2 disabled:cursor-not-allowed disabled:opacity-50 w-fit md:px-6 sm:px-4 px-2 md:py-2 py-1 rounded-lg bg-cyan-400 hover:cursor-pointer hover:bg-white hover:text-blue-400 border-cyan-400"
        ref={buttonRef}
      >
        {title}
      </button>
    </div>
  );
};

export default LoadMoreButton;
