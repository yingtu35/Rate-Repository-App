import { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";

const orderMapping = {
  0: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  },
  1: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  2: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  },
};

const RepositoryList = () => {
  const [orderMethod, setOrderMethod] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debounceSearch] = useDebounce(searchKeyword, 1000);
  const first = 5;

  const order = orderMapping[orderMethod];
  const variables = {
    ...order,
    searchKeyword: debounceSearch,
    first,
  };
  const { loading, error, repositories, fetchMore } =
    useRepositories(variables);

  return (
    <RepositoryListContainer
      loading={loading}
      error={error}
      repositories={repositories}
      fetchMore={fetchMore}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      orderMethod={orderMethod}
      setOrderMethod={setOrderMethod}
    />
  );
};

export default RepositoryList;
