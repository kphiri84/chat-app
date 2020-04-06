import React from 'react'
import PropTypes from 'prop-types';

   
const Contact = props => (
<div className="Contact">
  <img src= {props.avatar} className="avatar" alt="avatar"/>
  <div className="status">
    <h4 className="name">{props.name}</h4>
    <p className="status-text"> <span className={props.online ? 'status-online' : 'status-offline'}></span>{props.online === true? 'online':'offline'}</p>
  </div> 
</div>
)

Contact.propTypes = {
    avatar: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };
export default Contact