import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './screens/HomePage'
import ArticlesList from './screens/ArticlesList'
import ArticleDetail from './screens/ArticleDetail'
import ArticleResultDetail from './screens/ArticleResultDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/article/:articleId" element={<ArticleDetail />} />
        <Route path="/article/:articleId/result/:resultId" element={<ArticleResultDetail />} />
      </Routes>
    </Router>
  )
}

export default App
