import { useState } from "react";

const useRender = () => {
  const [value, setValue] = useState<boolean>(false);

  return () => setValue(!value);
};

export default useRender;
