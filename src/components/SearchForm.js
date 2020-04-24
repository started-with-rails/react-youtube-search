import React from 'react'
class SearchForm extends React.Component {
      state = { value: '' };
    //   this.handleChange = this.handleChange.bind(this);
 
      handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.OnFormSubmit(this.state.value)
      }
    
      render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}> 
                <div className="field">
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
            </form>
        );
      }
    
}
export default SearchForm;