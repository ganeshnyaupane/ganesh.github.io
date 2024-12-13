import React, { Component } from 'react';
import WideCardProject from '../components/WideCardProject';
class Startups extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">StartUps</h1>
<WideCardProject title="Landbots" role="Co-Founder & Chief Technology Officer"
desc="•	Lanbots is a startup developing advanced farm robots to assist farmers with efficient irrigation management. Our innovative solutions aim to optimize water usage, reduce labor, and improve crop productivity."/>

<WideCardProject title="Caplan" role = "Co-Founder & Chief Technology Officer"
desc="• Caplan, derived from 'Cable to Plan,' is an innovative EduTech startup dedicated to unlocking the potential of young minds through a unique blend of technical expertise, cognitive (innovation) learning, and business acumen. We believe that by mastering these core skills, youth can confidently take charge of their futures and chart their own career paths."/>

<WideCardProject title="Idooco" role="Co-Founder" 
desc="• Idooco is a web service company offering expertise in web development, mobile app creation, digital marketing, and software development. Their solutions are designed to help businesses enhance their online presence and digital capabilities."/>
</div>


)
}
}
export default Startups