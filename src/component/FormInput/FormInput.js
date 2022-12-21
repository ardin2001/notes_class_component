import React from 'react';
import './style.css'

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: '',
          createdAt : new Date(),
          archived: '1',
          sisa : 50
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onArchivedChangeEventHandler = this.onArchivedChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onTitleChangeEventHandler(event) {
        this.setState(() => {
          if(parseInt(event.target.value.length) >=0 && parseInt(event.target.value.length) <= 50){
            return {
              title: event.target.value,
              sisa : 50-event.target.value.length,
            }
          }
        });
      }
      
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }

      onArchivedChangeEventHandler(event) {
        this.setState(() => {
          return {
            archived: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.onAddNote(this.state);
      }
      render() {
        return (
          <form onSubmit={this.onSubmitEventHandler}>
            <h2>Buat Catatan</h2>
            <label>Judul (<span>Sisa karakter : {this.state.sisa}</span>)</label>
            <input type="text" placeholder="Masukkan judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <label>Catatan</label>
            <input type="text" placeholder="Masukkan catatan..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <label>Arsipkan</label>
            <select id="gender" value={this.state.archived} onChange={this.onArchivedChangeEventHandler}>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
            <button type="submit">Tambah</button>
          </form>
        )
      }
}
 
export default FormInput;