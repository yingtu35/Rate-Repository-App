import { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";
import useRefresh from "../../hooks/useRefresh";
import useMount from "../../hooks/useMount";
// import { useNavigate } from "react-router-native";

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

const RepositoryList = ({ navigation }) => {
  const { firstMount } = useMount();
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
  const { loading, error, repositories, refetch, fetchMore } =
    useRepositories(variables);

  const [refreshing, onRefresh] = useRefresh({ refresh: refetch });

  const onEndReached = () => {
    fetchMore();
  };

  const onRepositoryPress = (id) => {
    navigation.navigate("Repository", { id });
    // navigate(`/repository/${id}`);
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
      refreshing={refreshing}
      onRefresh={onRefresh}
      firstMount={firstMount}
    />
  );
};

export default RepositoryList;
