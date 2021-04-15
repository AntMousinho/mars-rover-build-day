import React from 'react';
require('dotenv').config();


const SampleDisplay = (props) => {
	return (
		<div className="imgSample">
			<img key={`img-${props.index}`} id={`sample-image-${props.index}`} src={props.url} alt={props.inputAlt} />
			<p key={`date-${props.index}`} id={`sample-date-${props.index}`}>Earth Date: {props.date}</p>
			<p key={`sol-${props.index}`} id={`sample-sol-${props.index}`}>Sol: {props.sol}</p>
			<p key={`camera-${props.index}`} id={`sample-camera-${props.index}`}>Camera: {props.camera}</p>
			<p key={`id-${props.index}`} id={`sample-id-${props.index}`}>Id: {props.imgId}</p>
		</div>
	)
}

export default SampleDisplay;
