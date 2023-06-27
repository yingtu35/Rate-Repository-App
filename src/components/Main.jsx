import RepositoryList from "./RepositoryList";
import Repository from "./Repository";
import AppBar from "./AppBar";
import { View, StyleSheet } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import CreateReview from "./CreateReview";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}></Route>
        <Route path="/RepositoryList" element={<RepositoryList />}></Route>
        <Route
          path="/Repository/:repositoryId"
          element={<Repository />}
        ></Route>
        <Route path="/Reviews" element={<CreateReview />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </View>
  );
};

export default Main;
