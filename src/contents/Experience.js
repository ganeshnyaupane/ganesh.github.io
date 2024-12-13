import React, { Component } from 'react';
import WideCardProject from '../components/WideCardProject';
class Experience extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">Professional Experience</h1>

<WideCardProject title="Software Development Engineer" where="Amazon - Alexa" when=" June 2022 - Present"
/>

<WideCardProject title="Web Application Developer" where="Wission Talks" when=" Jan 2020 - May 2020"
/>

<WideCardProject title="Web Developer" where="Entreesphere" when=" May 2019 - Aug 2019"
/>

<h1 className="subtopic">Student Experience</h1>

<WideCardProject title="Graduate Teaching Assistant" where="University of Houston - Clear Lake" when=" Jan 2022 - May 2022"
/>

<WideCardProject title="Vice President - Committee Coordinator " where="Student Government Association - UHCL" when=" July 2021 - April 2022"
/>

<WideCardProject title="Student Assistant" where="Office of Student Advocacy - UHCL" when=" Sep 2021 - Jan 2022"
/>

<WideCardProject title="Secretary - Student Council" where="Center of Innovation and Entrepreneurship - MLRIT" when=" Sep 2019 - Jun 2020"
/>

<WideCardProject title="Student Intern" where="MLR Institute of Technology" when=" Sep 2019 - Jun 2020"
/>

<WideCardProject title="Student Partner" where="Internshala" when=" Mar 2018 - Mar 2019"
/>
</div>

)
}
}
export default Experience