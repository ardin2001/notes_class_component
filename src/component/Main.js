import React from 'react';
import CardList from './CardList/CardList';
import FormInput from './FormInput/FormInput';

function Main({database,tanggal,onDelete,onArsip,onAddNote,dataSearch}){
    return(
        <main>
            <div className="form-input">
                <FormInput onAddNote={onAddNote} tanggal={tanggal} />
            </div>
            <div className="card">
                {
                    database.length !== 0 ?  (
                        <><CardList
                        category={"Catatan Aktif"}
                        database={database.filter(data => data.archived === false && data.title.toLowerCase().indexOf(dataSearch) !== -1)}
                        tanggal={tanggal}
                        onDelete={onDelete}
                        onArsip={onArsip}
                        dataSearch={dataSearch} />
                        <CardList
                        category={"Catatan Arsip"}
                        database={database.filter(data => data.archived === true && data.title.toLowerCase().indexOf(dataSearch) !== -1)}
                        tanggal={tanggal}
                        onDelete={onDelete}
                        onArsip={onArsip}
                        dataSearch={dataSearch} />
                        </>
                    ) : <h1 style={{textAlign : "center"}}>Database Kosong!</h1>                                             
                }
            </div>
        </main>
    )
}
    

export default Main;