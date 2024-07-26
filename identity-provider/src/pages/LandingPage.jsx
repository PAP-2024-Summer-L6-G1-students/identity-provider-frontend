import { useState } from 'react'
import './LandingPage.css'

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import ExampleButtons from '../components/ExampleButtons';

export default function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <div id="landing-page">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ExampleButtons />
    </div>
  )
}
