import React from 'react'
import PropTypes from 'prop-types';


   
class Contact extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      online: false,
    };
  }
  render() {
    return(
    <div className="Contact">
  <img src= {this.props.avatar} className="avatar" alt="avatar"/>
  <div className="status">
    <h4 className="name">{this.props.name}</h4>
    <p className="status-text"> <span className={this.state.online ? 'status-online' : 'status-offline'}
    onClick={event => {
      const newOnline = !this.state.online;
      this.setState({ online: newOnline });
    }}></span>{this.state.online === true? 'online':'offline'}</p>
  </div> 
</div>
)
}
}
Contact.propTypes = {
    avatar: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };
export default Contact