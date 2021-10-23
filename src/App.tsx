import React from 'react'

const App = ({ title }: { title: string }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>This is an application setup from scratch with full of features like</p>
      <ul>
        <li>Webpack as module bundler</li>
        <li>Babel for transpile code so newest Javascript features are available to use</li>
        <li>Eslint for enforced code style</li>
        <li>Prettier for auto formatting code</li>
        <li>
          Husky for linting code at pre-commit and pre-push. So everyone in team have a consistent code style despite
          difference setup
        </li>
        <p>
          You can have a look in{' '}
          <a href="https://tult.notion.site/Setup-a-react-application-from-scratch-0bdef4016c9f4fd9a3b0461e4d2d63d3">
            here
          </a>{' '}
          where I try my best to explain why we need these tools, dependencies and the instructation to set things up
          step by step.
        </p>
      </ul>
    </div>
  )
}

export default App
