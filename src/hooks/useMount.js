import { useState, useEffect } from "react";

const useMount = () => {
  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
    }
  }, []);

  return { firstMount };
};

export default useMount;
