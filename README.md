# 🎤 Presentation Order Assignment Tool

## Project Overview

This web application is designed to randomly assign presentation order for a group of presenters. It provides a simple interface to add presenters to a schedule, displaying the time slots and speaker order.

## Features

- Randomly assigns presenters to time slots
- Displays a table with presentation order
- Interactive "Add Presenter" button
- Responsive design with CSS styling

## Project Structure

```
project-root/
├── index.html
├── style.css
└── index.js
```

## Setup and Usage

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/presentation-order-tool.git
   ```

2. Navigate to the project directory:
   ```
   cd presentation-order-tool
   ```

3. Open `index.html` in a web browser to use the application.

## How It Works

1. The page loads with a table containing headers for Time, Presenter, and Speaker Number.
2. Clicking the "Add Presenter" button will:
   - Randomly select a presenter from the predefined list
   - Assign the next available time slot
   - Add a new row to the table with this information
   - Increment the speaker number

## Customization

To customize the list of presenters or time slots:

1. Open `index.js` in a text editor.
2. Modify the `potentialPresentors` array to include your list of presenters.
3. Adjust the `times` array to reflect your desired time slots.

## Presentation Rules

The application includes a list of rules for the presentations:

- Presentations should not exceed 5 minutes
- All attendees should vote for their favorite project
- No PowerPoint slides are allowed
- Presenters should run their application in front of the class
- Presenters should be prepared to answer questions

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Future Improvements

- Add ability to input custom presenter names and time slots
- Implement a feature to save and load presentation orders
- Add a timer functionality for each presentation
- Create a more interactive UI with drag-and-drop capability
- Implement a voting system directly in the application

## Contributing

Contributions to improve the tool are welcome. Please feel free to fork the repository and submit a pull request with your changes.

---

Happy presenting! 🎉📊
