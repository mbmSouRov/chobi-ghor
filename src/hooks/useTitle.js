import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ছবি | Ghor`;
  }, [title]);
};

export default useTitle;
