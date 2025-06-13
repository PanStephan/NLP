import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import misisLogo from '../assets/misis-logo.png';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNavigateToArticles = () => {
    navigate('/articles');
  };

  const handleNavigateToGraphs = () => {
    // тут вибимо должна будет быть ссылка на страницу с графами знаний. Им возможно придется доработать приложение, чтобы не с корня работать, а с /graphs
    navigate('/graphs');
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <header className="home-header">
          <div className="logo-container">
            <img src={misisLogo} alt="МИСИС" className="logo-img" />
          </div>
          <h1 className="main-title">Тематические графы знаний</h1>
          <h2 className="subtitle">Водородная энергетика</h2>
        </header>

        <section className="description-section">
          <p className="description">
            Графы знаний представляют собой инструмент для структурирования 
            и визуализации научной информации.
          </p>
        </section>

        <section className="navigation-section">
          <button 
            className="nav-button primary-button" 
            onClick={handleNavigateToArticles}
          >
            <span className="button-text">
              <strong>Для исследователей</strong>
              <small>Анализ научных публикаций</small>
            </span>
          </button>
          
          <button 
            className="nav-button secondary-button" 
            onClick={handleNavigateToGraphs}
          >
            <span className="button-text">
              <strong>Обзор технологий</strong>
              <small>Визуализация графов знаний</small>
            </span>
          </button>
        </section>
      </div>

      <footer className="home-footer">
        <div className="footer-content">
          <span>{currentYear}</span>
          <span className="separator">•</span>
          <span>Университет МИСИС</span>
          <span className="separator">•</span>
          <span>СЕНСТЭК ЛАБ</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 