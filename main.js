// ==============================================================================================
// NY Tech Week Event Crawler
// ==============================================================================================
// Author: @ramonclaudio
// Date: 2025-06-04
// Description: This script crawls the NY Tech Week website and extracts event data.
// ==============================================================================================
// Usage: Navigate to (https://www.tech-week.com/calendar), open the console, and run the script.
// ==============================================================================================

const eventLinks = document.querySelectorAll('a[href*="partiful.com/e/"], a[href*="partiful.com/events/"]');
const events = [];

eventLinks.forEach(link => {
  try {
    const hostEl = link.querySelector('.text-brand');
    const eventHost = hostEl ? hostEl.textContent.trim() : '';

    const dateTimeEl = link.querySelector('.text-grayText.text-nowrap');
    let eventDate = '', eventTime = '';
    if (dateTimeEl) {
      const dateTimeText = dateTimeEl.textContent.trim();
      const match = dateTimeText.match(/^([A-Za-z]+)\s+(.+)$/);
      if (match) {
        eventDate = match[1];
        eventTime = match[2];
      }
    }

    const nameEl = link.querySelector('[class*="text-[17px]"]');
    const eventName = nameEl ? nameEl.textContent.trim().replace(/\s+/g, ' ') : '';

    let eventLocation = '';
    const grayTextEls = link.querySelectorAll('.text-grayText.text-nowrap');
    if (grayTextEls.length > 1) {
      eventLocation = grayTextEls[1].textContent.trim();
    } else if (grayTextEls.length === 1) {
      eventLocation = 'Event Location Not Available';
    }

    const eventURL = link.getAttribute('href');

    if (eventName) {
      events.push({
        eventName,
        eventHost,
        eventDate,
        eventTime,
        eventLocation,
        eventURL
      });
    }
  } catch (e) {
    console.error('Error processing event link:', e);
  }
});

function downloadJSON(obj, filename) {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", filename);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
}

downloadJSON(events, "ny-tech-week-events.json");

// Made with ❤️ by @ramonclaudio
