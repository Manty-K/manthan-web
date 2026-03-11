import './Sidebar.css'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'about', label: 'About' },
  // { id: 'experience', label: 'Experience' },
  // { id: 'projects', label: 'Projects' },
  // { id: 'labs', label: 'Labs' },
  // { id: 'accomplishments', label: 'Accomplishments' },
  // { id: 'blogs', label: 'Blogs' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-header">
          <h1 className="sidebar-name">Manthan Khandale</h1>
          <p className="sidebar-tagline">Software Developer · Flutter · Agentic AI</p>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-item">
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </aside>
  )
}
