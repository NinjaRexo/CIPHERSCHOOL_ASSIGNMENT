import React from "react";
import corona from "../img/photo1.png";
import finance from "../photo2.png";
import img from "../photo3.png";
import PropTypes from "prop-types";
export default class Projects extends React.Component {
render() {
		return (
			<React.Fragment>
				<div className="container-fluid bg-light">
					<div className=" project-container container bg-light ">
						<div id="my-projects" className="row  justify-content-center mx-auto">
						<h1  id ="projects" className={"text-center" + this.props.fadeInRight}>
							Projects
							<br/><br/><br/>
						</h1>
						</div>
						<div className="row text-center align-items-center">
							<div className="col-lg-4 col-md-4 col-sm-12">
							<div className={"card"+this.props.fadeInRight} >
								{console.log(this.props)}
								<img className="card-img-top" src={img} alt="Card image cap"/>
								<div className="card-body">
									<h5 className="card-title">Image Compressor</h5>
									<p className="card-text">A quick tool to compress images on the go and is live.</p>
									<a href="https://imgcompressor.netlify.app/" className="btn btn-primary">
										LIVE DEMO
									</a>
								</div>
							</div>
							<br/><br/>
							</div>
							<div className="col-lg-4 col-md-4  col-sm-12">
							<div className="card">
								<img className="image" src={photo1} alt="find image"/>
								<div className="card-body">
								<h5 className="card-title">Job details</h5>
									<p className="card-text">This website use for find the job</p>
									<a href="http://indiajobvancy/" className="btn">
										 Details
									</a>
							</div>
							</div>
							<br/><br/>
							</div>
							<div className="col-lg-4 col-md-4  col-sm-12">
							<div className="card" >
								<img className="card-img-top" src={details} alt="image"/>
								<div className="card-body">
									<h5 className="card-title">TO-Do App</h5>
									<p className="card-text">This page gives the complete details about me</p>
									<a href="https://www.linkedin.com/in/nisha-yadav-bba2a3154/" className="btn">LINKEDIN</a>
								</div>
							</div>

							<br/><br/>
							</div>

						</div>

						<br/><br/><br/><br/><br/>
					</div>
				</div>
			</React.Fragment>
		);
	}
};