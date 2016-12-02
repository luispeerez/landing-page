import React from 'react';

class LandingPage extends React.Component{
	
	componentDidMount(){
		$(document).ready(function() {
				
				var wow = new WOW({});
				//wow.init();

		    $('#landing-page').fullpage({
					navigation: true,
					navigationPosition: 'right',
					navigationTooltips: ['Register', 'About us', 'Out team', 'Contact us'],	
					scrollBar: true,
	        anchors:['landing1', 'landing2','landing3','landing4'],
	        afterRender: function(){
	          wow.init();
	        }						
		    });
		});		
	}

	render(){
		return(	
			<div>
				<div id="landing-page">
				    <div className="section section-landing">
		    			<h1 className="section-title wow fadeIn">Our software</h1>
				    	<div className="section-inner flex-row">
				    		<div className="">
				    			<img data-src="images/studio2.png"/>
				    		</div>
				    		<div className="macbook-wrapper ">
					    		<img data-src="images/macbook.png"/>
				    		</div>
				    	</div>
				    	<a href="#landing2" className="continue-btn wow slideInUp">What is PlayerPro?</a>
				    </div>
				    <div className="section">
				    	<div className="section-inner video-section-content flex-row">
				    		
				    		<div className="phone wow slideInUp">
				    			<div className="video-wrap">
				    				<video 
					    				data-autoplay
					    				loop
				    					autoPlay="true"
				    					>
					    					<source 
					    						data-src="videos/video.mp4" type="video/mp4"/>
				    					</video>
				    			</div>
				    			<div className="cover"></div>
				    		</div>
				    		<div className="wow slideInRight">
				    			<h1>Download our mobile app</h1>
				    		</div>

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