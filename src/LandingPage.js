import React from 'react';

class LandingPage extends React.Component{
	
	componentDidMount(){
		$(document).ready(function() {
				
				var wow = new WOW({});
				wow.init();

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
				    	<div className="section-inner landing-section">
				    		
				    		<div className="phone wow slideInUp">
				    			<div className="video-wrap">
				    				<video 
					    				data-autoplay
					    				loop
				    					autoPlay="true"
				    					>
					    					<source 
					    						src="videos/video.mp4" type="video/mp4"/>
				    					</video>
				    			</div>
				    			<div className="cover"></div>
				    		</div>
				    		<div className="first-slide-content wow slideInRight">
				    			<h1>Download our mobile app</h1>
				    		</div>

				    	</div>

				    </div>
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
				    		<h1>Contact us</h1>
				    	</div>
				    </div>

				</div>			
			</div>
		);
	}
}

export default LandingPage;