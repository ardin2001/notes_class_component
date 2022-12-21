import React from 'react';
// import DeleteButton from '../DeleteButton/DeleteButton';
// import ArchivedButton from '../ArchivedButton/ArchivedButton';
import Bottom from '../Bottom/Bottom';

function CardItem({id,title,body,createdAt,archived,tanggal,onDelete,onArsip}){
    return(
        <div className='card-item'>
            <h3>{title}</h3>
            <p className='tanggal'>{tanggal(createdAt)}</p>
            <p>{body}</p>
            <Bottom id={id} action={onDelete} type={'Delete'} />
            <Bottom id={id} action={onArsip} type={(archived === true ? 'Pindahkan' : 'Arsipkan')} />
        </div>
    )
}
export default CardItem;