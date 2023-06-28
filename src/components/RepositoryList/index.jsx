import { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router-native";

const orderMapping = {
  latest: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  },
  highestRate: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  lowestRate: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  },
};

const RepositoryList = () => {
  const navigate = useNavigate();
  const [orderMethod, setOrderMethod] = useState("latest");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debounceSearch] = useDebounce(searchKeyword, 500);
  const first = 5;

  const variables = {
    ...orderMapping[orderMethod],
    searchKeyword: debounceSearch,
    first,
  };
  // console.log(variables);
  const { loading, error, repositories, fetchMore } =
    useRepositories(variables);

  const onEndReached = () => {
    fetchMore();
  };

  const onRepositoryPress = (id) => {
    navigate(`/repository/${id}`);
  };

  return (
    <RepositoryListContainer
      loading={loading}
      error={error}
      repositories={repositories}
      onEndReached={onEndReached}
      onRepositoryPress={onRepositoryPress}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      orderMethod={orderMethod}
      setOrderMethod={setOrderMethod}
    />
  );
};

export default RepositoryList;
