import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/screens.css'

const ArticlesList = () => {
  const [language, setLanguage] = useState('Русский')
  const [articles] = useState([
    { id: 1, title: 'Статья 1' },
    { id: 2, title: 'Статья 2' },
    { id: 3, title: 'Статья 3' },
    { id: 4, title: 'Статья 4' },
    { id: 5, title: 'Статья 5' },
    { id: 6, title: 'Статья 6' },
  ])
  
  const navigate = useNavigate()

  const handleArticleClick = (articleId: number) => {
    navigate(`/article/${articleId}`)
  }

  const handleDeleteArticle = (e: React.MouseEvent, articleId: number) => {
    e.stopPropagation()
    //ипплементация удаления статьи
    alert(`Удаление статьи ${articleId}`)
  }

  const handleEditArticle = (e: React.MouseEvent, articleId: number) => {
    e.stopPropagation()
    //ипплементация редактирования статьи
    alert(`Редактирование статьи ${articleId}`)
  }

  const handleViewResults = (e: React.MouseEvent, articleId: number) => {
    e.stopPropagation()
    navigate(`/article/${articleId}`)
  }

  const handleAddArticle = (e: React.MouseEvent) => {
    e.stopPropagation()
    //имплементация добавления статьи
    alert('Добавление новой статьи')
  }

  return (
    <div className="screen-container">
      <h1>Список статей</h1>
      <div className="content-container">
        <div className="language-selector-container">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="language-selector"
          >
            <option value="Русский">Русский</option>
            <option value="English">English</option>
          </select>
        </div>

        <div className="articles-list">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="article-item"
              onClick={() => handleArticleClick(article.id)}
            >
              {article.title}
            </div>
          ))}
        </div>

        <div className="buttons-container">
          <button 
            className="action-button"
            onClick={handleAddArticle}
          >
            Добавить статью
          </button>
          <button 
            className="action-button"
            onClick={(e) => handleDeleteArticle(e, 1)}
          >
            Удалить статью
          </button>
          <button 
            className="action-button"
            onClick={(e) => handleEditArticle(e, 1)}
          >
            Редактировать статью
          </button>
          <button 
            className="action-button"
            onClick={(e) => handleViewResults(e, 1)}
          >
            Результаты по статье
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticlesList 