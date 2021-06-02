import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';

 const Formulario = ({saveCategory}) => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertaiment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'}
    ]
    //use my custom hook
    const [category, SelectNoticias] = useSelect('general', OPTIONS);

    //submit form
    const searchNews = e => {
        e.preventDefault();
        saveCategory(category)
    }

     return ( 
         <div className={`${styles.buscador} row`}>
             <div className="col s12 m8 offset-m2">
                <form 
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                        type="submit" 
                        className={`${styles['btn-block']} btn-large amber darken-2`}
                        value="Buscar"
                        />
                    </div>
                </form>
             </div>
         </div>
      );
 }
Formulario.propTypes = {
    saveCategory: PropTypes.func.isRequired
}
  
 export default Formulario;