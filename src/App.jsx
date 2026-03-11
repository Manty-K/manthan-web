import Sidebar from './components/Sidebar'
import About from './components/About'
import './App.css'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <About />
        {/* Experience, Projects, Labs, Accomplishments, Blogs — coming soon */}
      </main>
    </div>
  )
}
