import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { loading, error, data } = useRepositories();

  return (
    <RepositoryListContainer loading={loading} error={error} data={data} />
  );
};

export default RepositoryList;
