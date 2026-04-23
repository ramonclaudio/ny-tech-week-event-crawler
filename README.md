# NY Tech Week Event Crawler 🗽

A lightweight, browser-based event scraper for NY Tech Week that extracts structured event data from the official website. Perfect for tech professionals who want to programmatically analyze, filter, and plan their Tech Week schedule.

## 🎯 Overview

NY Tech Week features hundreds of events across NYC, making it challenging to manually sift through and find the best events that align with your interests, schedule, and networking goals. This open-source tool crawls the official NY Tech Week calendar and exports all event data as structured JSON, enabling you to:

- **Analyze events programmatically** by host, location, time, and type
- **Identify scheduling conflicts** and optimize your weekly itinerary  
- **Filter events** based on your criteria (VCs, specific companies, locations, etc.)
- **Build custom tools** for automatic event registration and calendar management
- **Share curated event lists** with your team or network

## ✨ Features

- 🚀 **Zero dependencies** - runs directly in your browser console
- 📊 **Structured data export** - clean JSON format with all event details
- 🏢 **Host identification** - easily filter by company/organization
- 📍 **Location parsing** - find events in your preferred NYC neighborhoods  
- ⏰ **Time extraction** - avoid scheduling conflicts
- 🔗 **Direct event URLs** - quick access to registration pages
- 📁 **Batch processing** - handles hundreds of events efficiently

## 🚀 Quick Start

1. **Navigate** to the [NY Tech Week Calendar](https://www.tech-week.com/calendar)
2. **Open Developer Tools** (`F12` or `Cmd+Option+I`)
3. **Go to the Console tab**
4. **Copy and paste** the contents of `main.js`
5. **Press Enter** to execute
6. **Download** the automatically generated `ny-tech-week-events.json` file

That's it! You now have all NY Tech Week events in a structured format.

## 📋 Data Structure

Each event contains the following fields:

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

### Sample Output

```json
[
  {
    "eventName": "Sitch x a16z speedrun: A Compliant Closing Party",
    "eventHost": "Sitch",
    "eventDate": "Sunday",
    "eventTime": "5:00 PM", 
    "eventLocation": "SoHo",
    "eventURL": "https://partiful.com/e/AfNxs0QgyvhldZB83osK"
  },
  {
    "eventName": "Female Founders and Funders",
    "eventHost": "Fierce Foundry",
    "eventDate": "Sunday",
    "eventTime": "5:00 PM",
    "eventLocation": "Midtown", 
    "eventURL": "https://partiful.com/e/8tPYW9t6HVLbXvqlheWH"
  }
]
```

## 💡 Use Cases

### For Attendees
- **Smart Scheduling**: Identify time conflicts and optimize your daily schedule
- **Host Filtering**: Find all events by specific VCs, accelerators, or companies you want to meet
- **Location Planning**: Group events by neighborhood to minimize travel time
- **FOMO Prevention**: Ensure you don't miss must-attend events

### For Organizers  
- **Competitive Analysis**: See what other events are happening when
- **Timing Optimization**: Find optimal time slots with less competition
- **Venue Insights**: Analyze popular locations and neighborhoods

### For Developers
- **Calendar Integration**: Build tools to auto-add events to Google Calendar
- **Notification Systems**: Create alerts for events by preferred hosts
- **Analytics Dashboards**: Visualize event distribution, popular times, etc.
- **Registration Automation**: Build systems to auto-register for matching events

## 📊 Example Analysis Scripts

### Find all events by top-tier VCs
```javascript
const vcEvents = events.filter(event => 
  ['a16z', 'Sequoia', 'Accel', 'GV', 'NEA'].some(vc => 
    event.eventHost.toLowerCase().includes(vc.toLowerCase())
  )
);
```

### Group events by location
```javascript
const eventsByLocation = events.reduce((acc, event) => {
  acc[event.eventLocation] = acc[event.eventLocation] || [];
  acc[event.eventLocation].push(event);
  return acc;
}, {});
```

### Find scheduling conflicts
```javascript
const conflicts = events.filter((event, i) => 
  events.slice(i + 1).some(other => 
    event.eventDate === other.eventDate && 
    event.eventTime === other.eventTime
  )
);
```

## 🤝 Contributing

We welcome contributions! This tool can be enhanced in many ways:

- **Parser improvements** - handle edge cases in event data
- **Additional fields** - extract more event metadata  
- **Error handling** - graceful handling of page structure changes
- **Documentation** - more use case examples and analysis scripts
- **Companion tools** - calendar integration, filtering UIs, etc.

### Development Setup
1. Fork this repository
2. Make your changes to `main.js`
3. Test on the live NY Tech Week calendar
4. Submit a pull request with a clear description

## 📁 Repository Structure

```
ny-tech-week-event-crawler/
├── main.js              # Main scraping script
├── events/              # Example event data
│   ├── wednesday.json   # Sample Wednesday events
│   ├── thursday.json    # Sample Thursday events
│   └── ...
└── README.md           # This file
```

## ⚠️ Important Notes

- **Browser Console Only**: This script runs in the browser console, not as a Node.js application
- **Website Changes**: The script may need updates if NY Tech Week changes their website structure
- **Rate Limiting**: Be respectful - don't overload their servers with rapid requests
- **Data Accuracy**: Always verify critical event details on the official website before registering

## 🙋‍♂️ FAQ

**Q: Why browser console instead of a proper scraper?**  
A: The NY Tech Week website likely uses dynamic loading. Browser execution ensures all content is fully rendered.

**Q: Can I automate this to run daily?**  
A: You could use tools like Puppeteer or Selenium to automate browser execution, but please be respectful of their servers.

**Q: What if the website structure changes?**  
A: The selectors in `main.js` may need updating. Check the DOM structure and update the CSS selectors accordingly.

## 📄 License

MIT License - feel free to use, modify, and distribute as needed.

## 👨‍💻 Author

Created with ❤️ by [@ramonclaudio](https://github.com/ramonclaudio)

---

**Happy networking at NY Tech Week! 🚀**

*Found this useful? Star the repo and share it with fellow tech professionals heading to NYC!*
