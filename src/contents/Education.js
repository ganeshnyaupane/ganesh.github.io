import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="Masters in Science with major Computer Science" where="University of Houston, Clear Lake" from="January 2021" to="August 2022"/>
<Widecard title="Bachelor of Technology in Computer Science and Enginnering" where="MLR Institute of Technology, Hyderabad" from="August 2016" to="September 2020"/>
<Widecard title="HSC" where="Thakur College of Science and Commerce" from="2014" to="2016"/>
<Widecard title="SSC" where="St Xaiver's High School" from="2013" to="2014"/>
</div>
)
}
}
export default Education