import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Textarea } from './components/ui/textarea'
import { Github, Twitter, Linkedin, MessageCircle, Loader2, LayoutDashboard } from 'lucide-react'
import { blink } from './blink/client'
import { ProjectDashboard } from './components/ProjectDashboard'
import PricingPage from './components/PricingPage'

interface User {
  id: string
  email: string
  displayName?: string
}

type View = 'home' | 'dashboard' | 'pricing'

function App() {
  const [prompt, setPrompt] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [currentView, setCurrentView] = useState<View>('home')

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  const handleSignIn = () => {
    blink.auth.login()
  }

  const handleSignOut = () => {
    blink.auth.logout()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim() || !user) return

    setCreating(true)
    try {
      // Create project in database
      const projectId = `proj_${Date.now()}`
      await blink.db.projects.create({
        id: projectId,
        userId: user.id,
        title: prompt.slice(0, 50) + (prompt.length > 50 ? '...' : ''),
        description: prompt,
        prompt: prompt,
        status: 'creating'
      })

      // Simulate project creation process
      setTimeout(() => {
        setPrompt('')
        setCreating(false)
        setCurrentView('dashboard')
        alert('Project created successfully! 🎉')
      }, 2000)
    } catch (error) {
      console.error('Error creating project:', error)
      setCreating(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Blink</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => setCurrentView('pricing')}
                className={`text-gray-600 hover:text-gray-900 ${currentView === 'pricing' ? 'bg-gray-100' : ''}`}
              >
                Pricing
              </Button>
              {user ? (
                <>
                  <Button 
                    variant="ghost" 
                    onClick={() => setCurrentView('home')}
                    className={`text-gray-600 hover:text-gray-900 ${currentView === 'home' ? 'bg-gray-100' : ''}`}
                  >
                    Home
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => setCurrentView('dashboard')}
                    className={`text-gray-600 hover:text-gray-900 ${currentView === 'dashboard' ? 'bg-gray-100' : ''}`}
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                  <span className="text-sm text-gray-600">
                    {user.displayName || user.email}
                  </span>
                  <Button variant="ghost" onClick={handleSignOut} className="text-gray-600 hover:text-gray-900">
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={handleSignIn} className="text-gray-600 hover:text-gray-900">
                    Sign In
                  </Button>
                  <Button onClick={handleSignIn} className="bg-primary hover:bg-primary/90">
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {currentView === 'dashboard' && user ? (
        <ProjectDashboard 
          user={user} 
          onCreateNew={() => setCurrentView('home')} 
        />
      ) : currentView === 'pricing' ? (
        <PricingPage />
      ) : (
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full text-center">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build apps with{' '}
                <span className="text-primary">AI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Describe your app idea and watch as AI builds it for you in seconds. 
                No coding required.
              </p>
            </div>

            {/* Input Section */}
            <form onSubmit={handleSubmit} className="mb-12">
              <div className="max-w-2xl mx-auto">
                <Textarea
                  placeholder="Describe your app idea... (e.g., 'Build a todo app with dark mode')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] text-lg resize-none border-2 border-gray-200 focus:border-primary focus:ring-primary rounded-lg p-4 mb-4"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium rounded-lg"
                  disabled={!prompt.trim() || !user || creating}
                >
                  {creating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Creating...
                    </>
                  ) : (
                    'Create App'
                  )}
                </Button>
                {!user && (
                  <p className="text-sm text-gray-500 mt-2">
                    Please sign in to create your app
                  </p>
                )}
              </div>
            </form>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Build complete apps in seconds, not weeks</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Beautiful Design</h3>
                <p className="text-gray-600">Modern, responsive designs that look professional</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deploy Instantly</h3>
                <p className="text-gray-600">Your app goes live immediately with a shareable URL</p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer - only show on home view */}
      {currentView === 'home' && (
        <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Blink</h2>
              <p className="text-gray-600 mb-6 max-w-md">
                The world's #1 AI fullstack engineer. Build beautiful, functional apps in seconds.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
                <li><button onClick={() => setCurrentView('pricing')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">Pricing</button></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Examples</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Blink. All rights reserved.
            </p>
          </div>
        </div>
        </footer>
      )}
    </div>
  )
}

export default App