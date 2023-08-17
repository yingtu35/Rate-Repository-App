<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/yingtu35/Rate-Repository-App">
    <img src="assets/icon1.png" alt="Logo" width="300">
  </a> -->

<h3 align="center">Rate-Repository-App</h3>

  <p align="center">
    A mobile application to search, view, rate, comment GitHub repositories with a single touch.
    <br />
    <a href="https://github.com/yingtu35/Rate-Repository-App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/yingtu35/Rate-Repository-App">View Demo</a>
    ·
    <a href="https://github.com/yingtu35/Rate-Repository-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/yingtu35/Rate-Repository-App/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Rate-Repository-App is a mobile application built on React Native.

Users can search any GitHub repositories they want, view them, rate them, and give comments!

Rate-Repository-App is initially created as a project assignment from the course [full stack open](https://fullstackopen.com/en/).

With some modification and extra features, Rate-Repository-App is easy to use.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![apollographql][apollographql.com]][apollographql-url]
* [![React][React.js]][React-url]
* [![expo][expo.dev]][expo-url]
* [![Jest][jest.com]][jest-url]
* [![eslint][eslint.org]][eslint-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these steps to run the mobile application using simulator or your physical device

### Prerequisites

* **npm**
  
  Recommend using nvm for Node version management

  [nvm][nvm-url]
* **rate-repository-api**
  
  Rate-Repository-App uses ApolloGraphQL to send requests to [rate-repository-api](https://github.com/fullstack-hy2020/rate-repository-api) backend server.
  
  Be sure to set up [rate-repository-api](https://github.com/fullstack-hy2020/rate-repository-api) first before moving on to install Rate-Repository-App

### Installation
* **Run in the host machine**
1. Clone the repo
   ```sh
   git clone https://github.com/yingtu35/Rate-Repository-App.git
   ```
2. Install NPM packages on both backend and frontend folders
   ```sh
   npm install
   ```
3. Create a .env file in the root directory and set up the APOLLO_URI environment variable:
   ```sh
   EXPO_PUBLIC_API_APOLLO_URI=YOUR_IP_ADDRESS/graphql
   ```
   **Check here to see how to find your [ip address](https://fullstackopen.com/en/part10/communicating_with_server#http-requests)**
4. Start the server
    ```sh
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Enjoy the short demo using ios simulator to see how Rate-Repository-App works.

[Demo][demo-url]
<!-- 
[![Rate-Repository-App demo](images/video%20thumbnail.png)](http://www.youtube.com/watch?v=MnJX33HtIVE "Rate-Repository-App demo") -->

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap

- [ ] Upload to App store and Google Play
- [ ] Enhance features in rate-repository-api (much harder)
- [ ] Welcome any new advice!
    <!-- - [ ] Nested Feature -->

See the [open issues](https://github.com/yingtu35/Rate-Repository-App/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@YingTu1685990](https://twitter.com/YingTu1685990) - yingtu35@gmail.com

Project Link: [https://github.com/yingtu35/Rate-Repository-App](https://github.com/yingtu35/Rate-Repository-App)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Full Stack open](https://fullstackopen.com/en/)
* [Expo](https://expo.dev/)
* [React Navigation](https://reactnavigation.org/)
* [React Native Paper](https://reactnativepaper.com/)
<!-- * []()
* []() -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/yingtu35/Rate-Repository-App.svg?style=for-the-badge
[contributors-url]: https://github.com/yingtu35/Rate-Repository-App/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yingtu35/Rate-Repository-App.svg?style=for-the-badge
[forks-url]: https://github.com/yingtu35/Rate-Repository-App/network/members
[stars-shield]: https://img.shields.io/github/stars/yingtu35/Rate-Repository-App.svg?style=for-the-badge
[stars-url]: https://github.com/yingtu35/Rate-Repository-App/stargazers
[issues-shield]: https://img.shields.io/github/issues/yingtu35/Rate-Repository-App.svg?style=for-the-badge
[issues-url]: https://github.com/yingtu35/Rate-Repository-App/issues
[license-shield]: https://img.shields.io/github/license/yingtu35/Rate-Repository-App.svg?style=for-the-badge
[license-url]: https://github.com/yingtu35/Rate-Repository-App/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0A66C2
[linkedin-url]: https://linkedin.com/in/yingtu
[product-screenshot]: assets/product.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[eslint.org]: https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://www.eslint.com/
[expo.dev]: https://img.shields.io/badge/expo-000020?style=for-the-badge&logo=expo&logoColor=white
[expo-url]: https://expojs.com/
[apollographql.com]: https://img.shields.io/badge/apollographql-311C87?style=for-the-badge&logo=apollographql&logoColor=white
[apollographql-url]: https://apollographql.com/
[nvm-url]: https://github.com/nvm-sh/nvm
[jest.com]: https://img.shields.io/badge/Jest-15C213?style=for-the-badge&logo=Jest&logoColor=C21325
[jest-url]: https://jestjs.io/
[demo-url]: https://youtu.be/7ITpYW81BAs
