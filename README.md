<div id="top"></div>
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
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">React application boilerplate</h3>

  <p align="center">
    An awesome boilerplate react application to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This is a boilerplate react application that setup with full mordern like webpack, babel, eslint, prettier, git hooks and typescript. Below is the few things that I expected this repo to helping me out and hopefully for you guys.

Here's why :
* Your time should be focused on creating something amazing. A project template that saving my time and yours.
* I don't want to doing the same thing again and again each time I start a new project.
* Able to quickly setup a frontend project that giving me and my team the best **EXPERIENCE** when coding.  

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

The main dependencies and tools that being used in this repo

* [React.js](https://reactjs.org/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Typescript](https://www.typescriptlang.org/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Tailwindcss](https://tailwindcss.com/)
* [Husky](https://typicode.github.io/husky/#/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The final goal of this repo is to setup a react application from scratch that supported 2 mode which are development mode and production mode. 
The common idea for 2 modes is:
1. Using typescript.
2. Using webpack as a module bundler all neccessary files such as `.ts, .tsx, .js, .jsx` and assets files like css, image, json, ... 
Support hot reload, seperate configuration with each mode, clean up output folder after each build times, ...etc.
4. Linting and formating code with eslint and prettier.

#### For development mode

The idea here is use babel to compile typescript code and newest Javascript syntax, features to ES5 which is supported by browsers. Babel will not do type checking which make its compile time much faster than normal `tsc` and that good for developers. Besides that, we only have to manage only one compiler which
makes thing easier.

#### For production mode

Becase babel cannot do type checking. So we still have to use `tsc` to compile our Typescript code into Javascript. So, I decide to only use it when it comes to production and before commiting our changes as well. The reason for doing it because I don't want bad code sneaky into my repo and I've to create a new commit to fix that which cause extra work.

### Prerequisites

1. Make sure you have nodejs installed in your local machine. If you don't have it yet, please install it. You could type `node -v` in your terminal to check whether nodejs is installed or not.
2. Clone the repo

### Installation

1. Install neccessary dependencies
  ```sh
  yarn install // OR
  npm install
  ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can start the project under development mode by the command `yarn dev`. Please check out `package.json` file for more commands.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
<!--
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [] Add Additional Templates w/ Examples
- [] Add "components" document to easily copy & paste sections of the readme
- [] Multi-language Support
    - [] Chinese
    - [] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>
-->



<!-- CONTRIBUTING -->
<!--
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
-->


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Tu Le Thanh - [Tu Le Thanh](https://www.facebook.com/le.thanhtu.129) - lethanhtu1551998@gmail.com

Project Link: [https://github.com/lethanhtupk/react-application-boilerplate](https://github.com/lethanhtupk/react-application-boilerplate)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<!--
Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>

-->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

