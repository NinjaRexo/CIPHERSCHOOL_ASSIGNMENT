import React from "react";


class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								href="https://github.com/nishayadav1"
								target="_blank">
								<i className="fa  fa-4x fa-github-alt large" aria-hidden="true"></i>
							</a>
							<a
								className="px-3"
								href="https://www.linkedin.com/in/nisha-yadav-bba2a3154/"
								target="_blank">
								<i className="fa fa-4x fa-linkedin" aria-hidden="true"></i>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Aalap Rawat &copy; 2020</h5>
				</div>
			</div>
		);
	}
}

export default Footer;