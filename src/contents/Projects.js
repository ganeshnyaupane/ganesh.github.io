import React, { Component } from 'react';
//import Widecard from '../components/Widecard';
import WideCardProject from '../components/WideCardProject';
class Projects extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">Academic Projects</h1>
<WideCardProject title="Garbage Waste Detection using Image Processing" where="Marri Laxman Reddy Institute of Technology" when=" Spring 2020"
desc="•	Developed a mobile application using android which uses the image processing technique to identify the garbage waste. The system preprocesses the image collected and stored in the data based to build a model. The main idea behind this is to develop a module for Garbage Identification and sending information to collect the garbage which helps in keeping the environment clean."/>

<WideCardProject title="Call off Farm Maverick" where="Marri Laxman Reddy Institute of Technology" when=" Fall 2019"
desc="• The model named Call off Farm Maverick is a farm bot which can be operated from the phone module based on Bluetooth/WIFE module. Basic features of our bot are irrigation and harvesting. The module of this bot had come from the idea of advancing the present farm bot and to provide to every farmer for a better cost and for easy use ability."/>
</div>


)
}
}
export default Projects