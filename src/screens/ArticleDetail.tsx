import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/screens.css'

const ArticleDetail = () => {
  const { articleId } = useParams<{ articleId: string }>()
  const navigate = useNavigate()
  
  const [results] = useState([
    { id: 1, title: 'Результат 1' },
    { id: 2, title: 'Результат 2' },
    { id: 3, title: 'Результат 3' },
  ])

  const handleResultClick = (resultId: number) => {
    navigate(`/article/${articleId}/result/${resultId}`)
  }

  const handleViewStepResults = () => {
    alert('Просмотр результатов по этапам')
  }

  return (
    <div className="screen-container">
      <h1>Статья</h1>
      <div className="article-detail-container">
        <h2>Статья {articleId}</h2>
        
        <div className="article-content-container">
          <div className="results-sidebar">
            {results.map((result) => (
              <div 
                key={result.id} 
                className="result-item"
                onClick={() => handleResultClick(result.id)}
              >
                {result.title}
              </div>
            ))}
          </div>
          
          <div className="article-content">
            <div className="article-text">
              <p>Текст статьи</p>
              <p>Рисунок</p>
              <p>Формула</p>
            </div>
          </div>
          
          <div className="result-preview">
            <h3>Результат</h3>
            <div className="result-preview-content">
              {/* Результат будет отображаться здесь */}
            </div>
          </div>
        </div>
        
        <div className="buttons-container">
          <button 
            className="action-button"
            onClick={handleViewStepResults}
          >
            Просмотр результатов по этапам
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail 