import React from 'react';

class LandingPage extends React.Component{
	
	componentDidMount(){
		$(document).ready(function() {
		    $('#landing-page').fullpage({
					navigation: true,
					navigationPosition: 'right',
					navigationTooltips: ['Register', 'About us', 'Out team', 'Contact us'],		    	
		    });
		});		
	}

	render(){
		return(	
			<div>
				<div id="landing-page">
				    <div className="section">
				    	<div className="section-inner">
				    		<h1>Register</h1>
				    	</div>
				    </div>
				    <div className="section">
				    	<div className="section-inner">
				    		<h1>About us</h1>
				    	</div>
				    </div>
				    <div className="section">
				    	<div className="section-inner">
				    		<h1>Our team</h1>
				    	</div>
				    </div>
				    <div className="section">
				    	<div className="section-inner">
				    		<h1>Contact us</h1>
				    	</div>
				    </div>

				</div>			
			</div>
		);
	}
}

export default LandingPage;