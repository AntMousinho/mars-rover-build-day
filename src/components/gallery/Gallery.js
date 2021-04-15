import React, { Component } from 'react';
import axios from 'axios';
import SampleDisplay from '../sampleDisplay/SampleDisplay';
require('dotenv').config();

class Gallery extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgList: [],
			rover: 'Perseverance'
		};
	}

	selectChange = (e) => {
		this.setState({ rover: e.target.value });
	}

	handleClick = () => {
		this.clearImages();
		const inputUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + this.state.rover + '/latest_photos?api_key=' + process.env.REACT_APP_; 
		axios.get(inputUrl)
		.then(res => {
			while(this.state.imgList.length < 10) {
				let index = Math.floor(Math.random() * res.data.latest_photos.length);
				let newImg = res.data.latest_photos[index]
				if(!this.state.imgList.includes(newImg)) {
					this.setState({imgList: [...this.state.imgList, newImg]});
				}
			}
		})
	}

	clearImages = () => {
		this.setState({imgList: []});
	}

	render() {
		return(
			<div>
				<div>
					<select id="rover-select" onChange={this.selectChange}>
						<option id="rover-option-per">Perseverance</option>
						<option id="rover-option-cur">Curiosity</option>
					</select>
					<button id="mars-find-photo" type="submit" onClick={this.handleClick}>Find Rover Photo</button>
					<button id='mars-clear' type="clear" onClick={this.clearImages}>Clear</button>
				</div>

				<div>
					{this.state.imgList.map((image, index) => {
						return (
							<SampleDisplay 
								index={index}
								url={image.img_src} 
								inputAlt={`${image.rover.name}-${index}`} 
								date={image.earth_date} 
								sol={image.sol} 
								camera={image.camera.full_name} 
								imgId={image.id}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Gallery;


// handleClick = () => {
// 	this.clearImages();
// 	// console.log(process.env.NASA_API_KEY);
// 	const inputUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=fCJdOzCDTXigLUkBMCjPcRkr2KSTLWePwEeaH5n4'; 
// 	// const inputUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=fCJdOzCDTXigLUkBMCjPcRkr2KSTLWePwEeaH5n4'; 
// 	axios.get(inputUrl)
// 	.then(res => {
// 		while(this.state.imgList.length < 8) {
// 			// console.log(res.data);
// 			let index = Math.floor(Math.random() * res.data.latest_photos.length);
// 			// console.log(index);
// 			let newImg = res.data.latest_photos[index]
// 			if(!this.state.imgList.includes(newImg)) {
// 				this.setState({imgList: [...this.state.imgList, newImg]});
// 			}
// 		}
// 	})
// }