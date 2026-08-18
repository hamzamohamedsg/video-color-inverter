Video Color Inverter
Video Color Inverter is a lightweight Google Chrome extension built to toggle color inversion on HTML5 video elements across any webpage.
Key Use Cases
⚬	Online Lectures: Easily turn harsh, bright whiteboard recordings into high-contrast dark modes to reduce eye strain during late-night study sessions.
⚬	Accessibility: Improve visual clarity and readability for users who benefit from inverted color schemes.
⚬	Low-Light Viewing: Comfortable viewing in dark environments without adjusting your entire display brightness.
Features
⚬	One-Click Toggle: Click the extension icon to instantly invert or restore video colors.
⚬	Universal Compatibility: Works across main page videos and embedded iframes.
⚬	Lightweight: Runs on Manifest V3 with minimal resource usage.
Installation
	1.	Clone or download this repository to your local machine.
	2.	Open Google Chrome and navigate to chrome://extensions/.
	3.	Enable Developer mode using the toggle switch in the top-right corner.
	4.	Click Load unpacked in the top-left corner.
	5.	Select the directory containing the project files (manifest.json, background.js, and the images folder).
How It Works
⚬	The background service worker listens for a click on the extension icon.
⚬	It executes a script that targets all elements on the active tab and inside any embedded iframes.
⚬	The script toggles the CSS rule filter: invert(1) on every detected video element.
Permissions
⚬	activeTab: Required to interact with the current tab when the extension icon is clicked.
⚬	scripting: Required to inject the color inversion script into the page.
⚬	host_permissions (): Allows the script to run across any webpage or embedded iframe.
