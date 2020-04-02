import React from 'react'


const online = true
   
const Contact = () => 
<div className="Contact">
<img src='https://randomuser.me/api/portraits/men/50.jpg' class="avatar" alt=""/>
<div className="status">
<h4 className="name">Marshall Morales</h4>
<p className="status-text"> <span class="status-online"></span>{online === true? 'online':'offline'}</p>
</div> 
</div>

export default Contact