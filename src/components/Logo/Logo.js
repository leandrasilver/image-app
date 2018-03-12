import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 77 }} style={{ height: 50, width: 50 }} >
				<div className="Tilt-inner"> 
					<img alt="Face logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKaSURBVGhD7dlLyA1xHMbx45KFa5F6F0pk4ZJEEpLLwoqwkBIpCSULC5eFUO/OhkQ2JEJsLMSKpVKywwKxEAuU+/3u+9Q7Nc08c8zMOTPvqP9Tn83bb35nzpn/OfP7z9tqkzX4jj993uB1zT4jev0nGInCOYeoSVMsROHchmsW0RXagFEYh4P4DVfrPMVKDMMknIGri9uK3BmEeXgP1yyyGsmcgKtN0hueg3gG4DpcfeQC9MH9M/PxCK5JnNbuYCSzBK4+6SFcNsLVx33DcQyBjS7vJ7iDk9TMNVoKV5/0GC6b4eqds7A5CXdAFn16yVyEq3V09eLRkr4JV5tlBlK5B1ec5Qt2QVdyJk7D1WV5hU0Yj7m4ClfXzh6kEv/N/l8cQypf4Yqb7ChSuQ9X3GS7kYrenStusgVIZTJ+wB3QRFpBA2FzAO6gpvkF3bMyozFhH5p8ZTTjrUWuTECRAbAu15Br1opH879rVoRumppyn+Fd3986sReFcxmuWZYXOIRV0N1+BJLRpzkL26D+P+F6ZVmGwtkB18zRunUnPhQaQbRU3e6uyJCo3WqpHeI0uIaOpuHlWAftGR7gI5J1Wl43oB8U7fby7l9Ex5XOXbim/WE7SkfTrWtaN13xMSid0fgA17xOp9BxDsM1r4vu4lPRccbiLdyL1KErVyPKTrgXqZqe5PSga9ETk1twL1alLeh6pqAbY0ZeV6AhtpKsQNGxoow7KDwcFk3V35eXmIhaUtW2WPcsPRqqLVq7vXAnU9ZzzEa/RE/Hu/Gd0ZBZ23LKymLoWa47wTzOQ6NQI6J9h0YZjRPuZB3tHEttlOrIdOgTbvfUUlto/fINR+OjpbIeR3AJ+jfefixC5rOokJCQkJCQkJCQkArTav0FM0dyMxeM5vwAAAAASUVORK5CYII="/>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;