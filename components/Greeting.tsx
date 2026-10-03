'use client';

import * as React from 'react';

function getClientGreeting(): string {
	const hour = new Date().getHours();
	if (hour >= 5 && hour < 12) return 'Good morning';
	if (hour >= 12 && hour < 17) return 'Good afternoon';
	if (hour >= 17 && hour < 21) return 'Good evening';
	return 'Good night';
}

export default function Greeting() {
	const [greeting, setGreeting] = React.useState<string>(getClientGreeting);

	React.useEffect(() => {
		// Set greeting using user's actual browser/local device time
		setGreeting(getClientGreeting());

		// Periodically refresh in case the user has the page open across time boundaries
		const interval = setInterval(() => {
			setGreeting(getClientGreeting());
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	return <span suppressHydrationWarning>{greeting}</span>;
}
