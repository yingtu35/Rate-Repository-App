import { screen, render } from "@testing-library/react-native";
import RepositoryListContainer from "../../src/components/RepositoryList/RepositoryListContainer";
import { convertNumber } from "../../src/utils/convertNumber";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      const loading = false;
      const error = false;

      // Add your test code here
      render(
        <RepositoryListContainer
          loading={loading}
          error={error}
          data={{ repositories }}
        />
      );

      // screen.debug();

      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepo, secondRepo] = repositoryItems;

      const [firstRepoData, secondRepoData] = repositories.edges;

      expect(firstRepo).toHaveTextContent(firstRepoData.node.fullName);
      expect(firstRepo).toHaveTextContent(firstRepoData.node.description);
      expect(firstRepo).toHaveTextContent(firstRepoData.node.language);
      expect(firstRepo).toHaveTextContent(
        convertNumber(firstRepoData.node.forksCount)
      );
      expect(firstRepo).toHaveTextContent(
        convertNumber(firstRepoData.node.stargazersCount)
      );
      expect(firstRepo).toHaveTextContent(
        convertNumber(firstRepoData.node.ratingAverage)
      );
      expect(firstRepo).toHaveTextContent(
        convertNumber(firstRepoData.node.reviewCount)
      );

      expect(secondRepo).toHaveTextContent(secondRepoData.node.fullName);
      expect(secondRepo).toHaveTextContent(secondRepoData.node.description);
      expect(secondRepo).toHaveTextContent(secondRepoData.node.language);
      expect(secondRepo).toHaveTextContent(
        convertNumber(secondRepoData.node.forksCount)
      );
      expect(secondRepo).toHaveTextContent(
        convertNumber(secondRepoData.node.stargazersCount)
      );
      expect(secondRepo).toHaveTextContent(
        convertNumber(secondRepoData.node.ratingAverage)
      );
      expect(secondRepo).toHaveTextContent(
        convertNumber(secondRepoData.node.reviewCount)
      );
    });
  });
});
