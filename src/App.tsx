import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ArticlesList from './screens/ArticlesList'
import ArticleDetail from './screens/ArticleDetail'
import ArticleResultDetail from './screens/ArticleResultDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/article/:articleId" element={<ArticleDetail />} />
        <Route path="/article/:articleId/result/:resultId" element={<ArticleResultDetail />} />
      </Routes>
    </Router>
  )
}

export default App
