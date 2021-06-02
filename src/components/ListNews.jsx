import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const ListNews = ({news}) =>( 
    <div className="row">
        {news.map(item =>(
            <News 
                key={item.url}
                item={item}
            />
        ))}
    </div>
);
ListNews.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default ListNews;

