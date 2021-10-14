import { useEffect, useMemo, useRef } from "react";

function FetchMore({ setPage }) {
  const observableTrigger = useRef(null);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([{ isIntersecting }]) => {
        isIntersecting && setPage((prev) => prev + 1);
      }),
    [setPage]
  );

  useEffect(() => {
    observer.observe(observableTrigger.current);
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return <div ref={observableTrigger} style={{ marginTop: "-1px" }} />;
}

export default FetchMore;
