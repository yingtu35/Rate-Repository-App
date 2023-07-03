import { useState, useCallback } from "react";

const useRefresh = ({ refresh }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  }, []);

  return [refreshing, onRefresh];
};

export default useRefresh;
