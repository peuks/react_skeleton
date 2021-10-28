import { useEffect, useState } from "react";
import { getStoryIds } from "../api";

const useFetchData = (data = []) => {
  const [storiesIds, setStoriesIds] = useState(false);

  useEffect(async () => {
    const res = await getStoryIds();
    setStoriesIds(res);
  }, []);

  return { storiesIds };
};
export default useFetchData;
