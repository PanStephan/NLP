import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/screens.css'

const ArticleResultDetail = () => {
  const { articleId, resultId } = useParams<{ articleId: string; resultId: string }>()
  
  const [selectedStep, setSelectedStep] = useState<string>('предобработка')
  
  const steps = [
    'предобработка',
    'токенизация',
    'стемминг',
    'эмбединг'
  ]

  const handleEditResult = () => {
    alert(`Редактирование результата ${resultId} для статьи ${articleId}`)
  }

  return (
    <div className="screen-container">
      <h1>Результат статьи</h1>
      <div className="result-detail-container">
        <h2>Статья {articleId} -&gt; Результат {resultId}</h2>
        
        <div className="result-detail-content">
          <div className="processing-steps">
            {steps.map((step) => (
              <div 
                key={step} 
                className={`processing-step ${selectedStep === step ? 'selected' : ''}`}
                onClick={() => setSelectedStep(step)}
              >
                {step}
              </div>
            ))}
          </div>
          
          <div className="source-text">
            <h3>Исходный текст</h3>
            <div className="source-content">
              {/* Оригинальный текст будет здесь */}
            </div>
          </div>
          
          <div className="step-result">
            <h3>Результат по выбранному этапу</h3>
            <div className="step-result-content">
              {selectedStep === 'предобработка' && <p>Результат предобработки текста</p>}
              {selectedStep === 'токенизация' && <p>Результат токенизации текста</p>}
              {selectedStep === 'стемминг' && <p>Результат стемминга</p>}
              {selectedStep === 'эмбединг' && <p>Результат эмбединга</p>}
            </div>
          </div>
        </div>
        
        <div className="buttons-container">
          <button 
            className="action-button"
            onClick={handleEditResult}
          >
            Редактировать результат
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleResultDetail 