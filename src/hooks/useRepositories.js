// import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const handleFetchMore = () => {
    if (loading || !data?.repositories.pageInfo.hasNextPage) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };
  // console.log(loading)
  // console.log(data)
  // const repositories = data.repositories.edges.map((edge) => edge.node)
  // const [repositories, setRepositories] = useState()
  // const [loading, setLoading] = useState(true)

  // const fetchRepositories = async () => {
  //   setLoading(true)

  //   const response = await fetch("http://192.168.1.112:5000/api/repositories")
  //   const data = await response.json()

  //   // console.log(data)
  //   setLoading(false)
  //   setRepositories(data)
  // }
  // useEffect(() => {
  //   fetchRepositories()
  // }, [])

  return {
    repositories: data?.repositories,
    loading,
    error,
    fetchMore: handleFetchMore,
  };
};

export default useRepositories;
