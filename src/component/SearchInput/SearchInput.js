import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          search: '',
        }
      
        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
      }
      
      onSearchChangeEventHandler(event) {
        this.setState(() => {
            return {
              search: event.target.value,
          }
        });
        
        this.props.onSearch({search : event.target.value});
      }
      render() {
        return <input type="text" placeholder="Search here..." value={this.state.search} onChange={this.onSearchChangeEventHandler} />
      }
}
 
export default SearchInput;