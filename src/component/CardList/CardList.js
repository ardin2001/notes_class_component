import React from 'react';
import CardItem from '../CardItem/CardItem';
import './style.css'
function CardList({category,database,tanggal,onDelete,onArsip}){
    return(
        <div className='card-list'>
            <div className="judul">
                <h2>{category}</h2>
            </div>
            <div className='card-items'>
                {
                    (database.length !== 0 ? 
                        database.map(data => <CardItem
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            body={data.body}
                            createdAt={data.createdAt}
                            archived={data.archived}
                            tanggal={tanggal}
                            onDelete={onDelete}
                            onArsip={onArsip} />) :
                        <h4>{category} Kosong!</h4>)
                }
            </div>
        </div>
    )
}
export default CardList;