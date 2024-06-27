import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsidetest() {
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this box to close this. It won't close if
            you click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
