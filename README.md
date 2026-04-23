# NY Tech Week Event Crawler

NY Tech Week had hundreds of events and the official calendar page had no filter, export, or sort. I wanted to group events by host, spot scheduling conflicts, and filter by neighborhood. So I wrote this: pop it into the browser console on the calendar page, get a JSON file of every event.

Browser console script that scrapes the NY Tech Week calendar into structured JSON.

## Usage

1. Open [tech-week.com/calendar](https://www.tech-week.com/calendar)
2. Open DevTools (F12)
3. Paste `main.js` into the console, press Enter
4. `ny-tech-week-events.json` downloads automatically

## Output

Each event:

```json
{
  "eventName": "AI Founders & Funders Mixer",
  "eventHost": "Accel Partners",
  "eventDate": "Thursday",
  "eventTime": "6:00 PM",
  "eventLocation": "SoHo",
  "eventURL": "https://partiful.com/e/xyz123"
}
```

## Analysis snippets

```javascript
// Filter by top-tier VCs
const vcEvents = events.filter(event =>
  ['a16z', 'Sequoia', 'Accel', 'GV', 'NEA'].some(vc =>
    event.eventHost.toLowerCase().includes(vc.toLowerCase())
  )
);

// Group by location
const byLocation = events.reduce((acc, event) => {
  acc[event.eventLocation] = acc[event.eventLocation] || [];
  acc[event.eventLocation].push(event);
  return acc;
}, {});

// Find conflicts (same day + time)
const conflicts = events.filter((event, i) =>
  events.slice(i + 1).some(other =>
    event.eventDate === other.eventDate &&
    event.eventTime === other.eventTime
  )
);
```

## Sample data

`events/` has JSON dumps from Wednesday through Sunday of the last Tech Week.

## License

MIT
