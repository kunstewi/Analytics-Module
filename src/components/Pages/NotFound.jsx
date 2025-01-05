import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-envyBold">404</h1>
          <p className="text-4xl font-thin font-envyRegular">|</p>
          <p className="text-2xl font-envyPropo">The Page could not be found</p>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          Take me home
        </Link>
      </div>
    </div>
  )
}   