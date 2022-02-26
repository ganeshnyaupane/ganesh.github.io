import React, { Component } from 'react';
import Social from '../components/Social';
import resume from '../img/GaneshResume.pdf';
class Contact extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">Contact Me</h1>
<h3>Email  : ganeshnyaupane98@gmail.com </h3>
<h3>Contact  : +1 682 252 6326  </h3>
<h2><a href={resume}>Resume</a></h2>
<Social />
</div>
)
}
}
export default Contact