import { useRef, useCallback } from "react";
import throttle from "lodash/throttle";

export function useLazyLoading({
  onIntersection,
  delay = 1000,
  marginFromBottom = 10,
}) {
  const containerRef = useRef(null);

  const onScroll = useCallback(
    throttle(() => {
      const scrollHeight = containerRef.current.scrollHeight;
      const containerScrollTop = containerRef.current.scrollTop;
      const containerHeight = containerRef.current.clientHeight;
      if (
        scrollHeight -
          containerScrollTop -
          containerHeight -
          marginFromBottom <=
        0
      ) {
        onIntersection();
      }
    }, delay),
    [onIntersection, containerRef, marginFromBottom, delay]
  );

  return [onScroll, containerRef];
}
