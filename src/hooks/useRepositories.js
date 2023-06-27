// import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ orderDirection, orderBy, searchKeyword }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "catch-and-network",
    variables: { orderDirection, orderBy, searchKeyword },
  });
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

  return { data, loading, error };
};

export default useRepositories;
