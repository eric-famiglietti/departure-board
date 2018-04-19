# MBTA Departures Boards

Displays the North Station and South Station departures boards.

Built using [Create React App](https://github.com/facebook/create-react-app). Uses [Papa Parse](https://www.papaparse.com/) for CSV parsing and [Moment.js](https://momentjs.com/) for date and time formatting.

**Files of note:**

1. `./public/departures.php` - Returns departures data in CSV format. Wraps MBTA endpoint to prevent CORS errors.
2. `./src/App.js` - React component for fetching departure data and managing individual departures boards.
3. `./src/DeparturesBoard.js` - React component for displaying a departures board.

## Requirements

- Yarn
- PHP (> 5.4.0)

## Installation

Install the required dependencies using:

```
yarn
```

## Usage

From the `./public` directory, run the PHP web server using

```
php -S localhost:8000
```

From the project root, run the React app using

```
yarn start
```
