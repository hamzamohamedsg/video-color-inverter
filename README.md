# Video Color Inverter

> A lightweight, privacy-friendly Google Chrome extension to instantly invert HTML5 video elements across any webpage or embedded iframe.

---

## Overview

**Video Color Inverter** provides a seamless, one-click solution to toggle video color inversion on the web. Designed primarily to transform high-brightness media—such as digital whiteboards, online lecture recordings, and slide presentations—into high-contrast dark modes, it significantly reduces eye strain during long study or viewing sessions.

---

## Highlights

* **One-Click Toggle:** Click the extension icon in your toolbar to instantly switch between inverted and original video colors.
* **Full Canvas & Iframe Support:** Seamlessly targets both root video elements and videos embedded within `<iframe>` structures.
* **Non-Intrusive & Fast:** Operates via on-demand script injection—zero background resource consumption when inactive.
* **Privacy-First:** Requires no user analytics, tracking, or remote server connections.

---

## Primary Use Cases

* **Lecture Videos & Chalkboards:** Invert bright white whiteboard backgrounds to dark canvas mode for comfortable nighttime study.
* **Accessibility Support:** Enhanced visual contrast tailored for users sensitive to high luminosity or specific visual impairments.
* **Low-Light Environments:** Watch tutorial videos or recorded presentations in dark rooms without harsh display glare.

---

## Quick Installation

1. Download or clone this repository to your local computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Toggle on **Developer mode** in the top-right corner.
4. Click **Load unpacked** in the top-left area.
5. Select the repository root folder containing `manifest.json`.

---

## Technical Architecture

The extension is engineered on **Manifest V3** for maximum performance and security:

* **Background Service Worker (`background.js`):** Listens for user action on the extension icon.
* **Script Injection (`chrome.scripting`):** Executes `toggleInvert()` dynamically across all frames on the active tab upon interaction.
* **CSS Filter Manipulation:** Directly toggles the CSS property `filter: invert(1)` on targeted `<video>` nodes.

---

## Permissions Explained

| Permission | Purpose |
| :--- | :--- |
| `activeTab` | Grants temporary access to interact with the current tab when triggered by the user. |
| `scripting` | Enables dynamic execution of the inversion script across page frames. |
| `<all_urls>` | Ensures support for videos hosted on any webpage or cross-origin iframe. |

---

## License

Distributed under the MIT License. Feel free to modify and adapt for your own workflows.
