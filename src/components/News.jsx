import React from 'react';
import PropTypes from 'prop-types';

const News = ({item}) => { 
    // Extract the data
    const  { image, url, title, description, source } = item;

    const imagen = (image) ?
        <div className="card-image">
            <img src={image} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
    : null;
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-ligt btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
};
News.propTypes = {
    item: PropTypes.object.isRequired
}
 
export default News;
