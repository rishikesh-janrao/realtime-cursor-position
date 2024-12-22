import { useEffect, useState } from "react";
function useMousePosition() {
  const [position, setPosition] = useState([]);

  useEffect(() => {
    if (window) {
      window.addEventListener("mousemove", (e) => {
        setPosition((prev) => [e.clientX, e.clientY]);
      });
    }
  }, []);

  return position;
}

export default useMousePosition;
