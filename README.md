# He5 Js - Documentation

## Overview

He5 Js is an open-source JavaScript utility library initiated by He5 Solutions ([he5.in](https://he5.in)). It provides a collection of common utility functions for password generation, randomization, encoding, DOM manipulation, table handling, and notifications.

## Installation

Simply include the He5 Js script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
```

## Usage Examples with Complete HTML

### 1. Generate a Random Password

Generates a secure password with a default length of 16 characters.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Password Generator</title>
    <script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
</head>
<body>
    <button onclick="document.getElementById('password').innerText = He5.generatePassword(12)">Generate Password</button>
    <p id="password"></p>
</body>
</html>
```

---

### 2. Generate a Random Number

Returns a random number between a given range (default 0 to 10).

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Random Number</title>
    <script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
</head>
<body>
    <button onclick="document.getElementById('randomNumber').innerText = He5.getRandomNumber(50, 10)">Get Random Number</button>
    <p id="randomNumber"></p>
</body>
</html>
```

---

### 3. Get a Random Value from an Array

Selects a random value from an array.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Random from Array</title>
    <script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
</head>
<body>
    <button onclick="document.getElementById('randomItem').innerText = He5.getRandomFromArray(['Apple', 'Banana', 'Cherry'])">Get Random Item</button>
    <p id="randomItem"></p>
</body>
</html>
```

---

### 4. Base64 Encoding & Decoding

Encodes and decodes strings in Base64 format.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Base64 Encoding & Decoding</title>
    <script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
</head>
<body>
    <input type="text" id="inputText" placeholder="Enter text"/>
    <button onclick="document.getElementById('encoded').innerText = He5.encodeBase64(document.getElementById('inputText').value)">Encode</button>
    <p id="encoded"></p>
    <button onclick="document.getElementById('decoded').innerText = He5.decodeBase64(document.getElementById('encoded').innerText)">Decode</button>
    <p id="decoded"></p>
</body>
</html>
```

---

### 5. Redirect to a URL

Redirects to a given URL, optionally opening it in a new tab.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Redirect</title>
    <script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
</head>
<body>
    <button onclick="He5.redirect('https://he5.in')">Redirect</button>
    <button onclick="He5.redirect('https://he5.in', true)">Redirect in New Tab</button>
</body>
</html>
```

---

### 6. Hide & Unhide Elements

Toggles visibility of an element.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Show/Hide Element</title>
    <script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
</head>
<body>
    <button onclick="He5.hide('#text')">Hide</button>
    <button onclick="He5.unHide('#text')">Show</button>
    <p id="text">This is a sample text.</p>
</body>
</html>
```

---

### 7. Copy Text to Clipboard

Copies text to the clipboard.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Copy to Clipboard</title>
    <script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
</head>
<body>
    <input type="text" id="copyText" value="Hello, He5!" />
    <button onclick="He5.copyToClipBoard(document.getElementById('copyText').value)">Copy</button>
</body>
</html>
```

---

### 8. Download Table as CSV

Exports an HTML table as a CSV file.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Download Table</title>
    <script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
</head>
<body>
    <table id="sampleTable" border="1">
        <tr><th>Name</th><th>Age</th></tr>
        <tr><td>Alice</td><td>25</td></tr>
        <tr><td>Bob</td><td>30</td></tr>
    </table>
    <button onclick="He5.downloadTableAsCSV('sampleTable', 'exported_data')">Download CSV</button>
</body>
</html>
```

---

### 9. Send Notifications

Displays notifications with different types.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Notifications</title>
    <script src="https://cdn.jsdelivr.net/gh/he5solutions/he5js@main/he5-main.js"></script>
</head>
<body>
    <button onclick="He5.sendNotification('Operation Successful', 'success', 3000)">Success</button>
    <button onclick="He5.sendNotification('Error Occurred', 'error', 3000)">Error</button>
</body>
</html>
```

## Conclusion

He5 Js provides a set of useful JavaScript utilities that simplify frontend development. Feel free to explore, contribute, and enhance its capabilities!

