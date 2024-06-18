# Autocomplete Feature

This repository provides a simple and efficient autocomplete functionality using plain JavaScript.

## Features

- Displays suggestions as you type.
- Allows navigation through suggestions using arrow keys.
- Select a suggestion by clicking on it or pressing Enter.

## Getting Started

### Prerequisites

You will need a basic understanding of HTML, CSS, and JavaScript to use this autocomplete feature.

### Installation

1. **Clone the repository:**
   - Clone the repository to your local machine using Git.

2. **Navigate to the project directory:**
   - Change to the project directory where the files are located.

### Usage

1. **Include the necessary HTML structure in your file:**
   - Add an input field and a list element in your HTML to serve as the autocomplete input and suggestions list.
  
   - `<input type="text" class="autocomplete-input form-control mb-2" data-list="fruits" placeholder="Start typing...">`
     `<ul class="autocomplete-list list-group mb-4"></ul> `

2. **Create the `styles.css` file for basic styling:**
   - Define basic CSS styles to make the autocomplete list look presentable.

3. **Create the `autocomplete.js` file with the provided JavaScript code:**
   - Implement the JavaScript code that handles the autocomplete functionality.

4. **Define your data sets:**
   - Create a JavaScript object with data arrays to be used for the autocomplete suggestions.

5. **Initialize the autocomplete:**
   - Call the initialization function after the DOM content has loaded, passing in your data sets.
