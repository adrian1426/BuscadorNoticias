import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({noticias}) =>(
    <div className="row">
        {
            noticias.map( (noticia,i) =>(
                <Noticia
                    key={i}
                    noticia={noticia}
                />
            ))
        }
    </div>
);

export default ListaNoticias;