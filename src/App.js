import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListNews from './components/ListNews';

function App() {

  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const consultAPI = async () =>{
      
      const uri = 'https://gnews.io/api/v4/top-headlines?';
      const countrySelected = `country=pe`;
      const categorySelected = `topic=${category}`;
      const apiKey = `token=6380f49be29698a0e25ae4f6e48dac13`;
      const url = `${uri}${categorySelected}&${countrySelected}&${apiKey}`;
      
      
     // const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=6ca6d16f8d7f44e881f396bc5c204d89`;
      const response = await fetch(url);
      const news = await response.json();

      saveNews(news.articles);
    } 
    consultAPI();
  }, [category])
  return (
    <Fragment>
      <Header 
        title='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario
          saveCategory={saveCategory} 
        />
        <ListNews 
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
