import React from 'react';
import Header from './component/header/Header';
import Main from './component/Main';
import Footer from './component/footer/Footer';
import { getInitialData, showFormattedDate } from './utils/index';

class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: getInitialData(),
          search : '',
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArsipHandler = this.onArsipHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }
    onDeleteHandler(id) {
        const data=[]
        data.length = 0;
        this.state.data.forEach(contact => {
            if(contact.id !== id){
                data.push(contact)
            }
            return data
        });
        this.setState({ data });
    }
    onArsipHandler(id) {
        const data=[]
        data.length = 0;
        this.state.data.forEach(contact => {
            if(contact.id === id){
                if(contact.archived === true){
                    contact.archived = false
                    data.push(contact)
                }
                else{
                    contact.archived = true
                    data.push(contact)
                }
            }else{
                data.push(contact)
            }
            return data
        });
        this.setState({ data });
    }
    onAddContactHandler({ title, body,createdAt,archived }) {
        this.setState((database) => {
          return {
            data: [
              ...database.data,
              {
                id: +new Date(),
                title : title,
                body : body,
                createdAt : createdAt.toISOString(),
                archived : Boolean(parseInt(archived)),
              }
            ]
          }
        });
    }
    onSearchHandler({ search }) {
        this.setState(() => {
            return {
              search: search
            }
        });
    }
    render(){
        console.log(this.state.search)
        return<>
            <Header title={"MYAPPS"} image={'./img/logo.png'} onSearch={this.onSearchHandler} />
            <Main
            database={this.state.data}
            tanggal={showFormattedDate}
            onDelete={this.onDeleteHandler}
            onArsip={this.onArsipHandler}
            onAddNote={this.onAddContactHandler}
            dataSearch={this.state.search} />
            <Footer title={"Design By Ardin Nugraha"} caption={"Thanks you for visit my website."}/>
        </>
    }
}
export default Container;