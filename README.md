# Vacation-booking

This README provides an overview of the functionality of the "Property Matcher" code, explaining how it works and how to use it.

## Overview

The "Vacation booking" code is designed to match properties based on specific criteria such as the number of beds, review score, cost per night, and the availability of a pool. It evaluates properties against these criteria and determines if they meet the user's preferences.

## Functionality

### Constants Definition

The code begins by defining constants representing various property criteria such as `beds`, `reviewScore`, `costPerNight`, etc. These constants represent the characteristics of the properties to be evaluated.

### Match Evaluation

The `match` variable is initialized as `true`, indicating a potential match. The code then checks each criterion against the specified requirements. If a property does not meet any of the criteria, the `match` variable is set to `false`.

### Dynamic Message Generation

Based on the match status, the code generates a dynamic message to inform the user whether a property is a match or not. If a property is a match, it also calculates and includes potential cost savings.

### Display Update

The code updates the HTML content to display the match status and property details dynamically. It updates the message displayed on the webpage based on the match status and updates the list items to display property details such as beds, review score, cost, pool availability, and location.

## How to Use

1. **Clone the Repository**: Clone this repository to your local machine using `git clone`.

2. **Open the HTML File**: Open the `index.html` file in a web browser.

3. **Enter Criteria**: Input your preferences for property criteria such as number of beds, review score, maximum cost per night, and whether a pool is required.

4. **Check Property**: Click the "Check Property" button to see if any matching properties are available.

## Technologies Used

- **HTML**: Used for structuring the webpage.
- **CSS**: Used for styling the webpage (not explicitly present in the provided code).
- **JavaScript**: Used for implementing the functionality of the property matching algorithm.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to modify and customize this README according to your preferences and the specific details of your project.
