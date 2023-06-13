# Weather-Journal App Project

## Demo

A demo of this project is available [here]().

<br>

![project screen capture](https://github.com/PatriciaFeio/udacity-weather-journal-app/blob/main/screen-capture.gif)

<br>

# Table of contents

[top]: #top

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)

<br>

## Overview

This is the third mandatory project for the **Front End Developer Nanodegree Program** sponsored by the **Bertelsmann Next Generation Tech Booster Scholarship Program**.

The aim of this project is to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

<br>

## Installation

1. [Clone](https://github.com/PatriciaFeio/udacity-weather-journal-app.git) or download this project to your machine.

2. Install the required dependencies by running this command on the project directory:

```
npm install
```

3. Get the API key needed to connect and access the data from the API used in this project.<br>
   Go to the OpenWeather website [here](https://openweathermap.org/), sign up using your email, and the API key will be sent to you in a confirmation email.

4. Add a `.env` file to the root directory with your API key like `API_KEY=your-api-key` so you are able to connect to the API.

5. Start the server by running `npm run start`.

6. Access the application using `http://localhost:3000/`.

<br>

## Usage

You can write the name of a city in the required input and how you are feeling, then click on the `Generate` button. <br>
The application will communicate with the API retrieving the temperature, a description of the weather conditions of the chosen city and the corresponding icon. You will also get the date, the hours, and the feelings you wrote.

<br>

## Development

The following technologies were used on the project development

- <a href="https://nodejs.org/en" target="_blank">Node.js</a>
- <a href="https://expressjs.com/" target="_blank">Express</a>
- <a href="https://www.npmjs.com/package/body-parser" target="_blank">Body-Parser</a>
- <a href="https://www.npmjs.com/package/cors" target="_blank">Cors</a>
- <a href="https://www.npmjs.com/package/dotenv" target="_blank">Dotenv</a>

The project was depoyed in <a href="https://render.com/"  target="_blank">Render</a>



[Back to top][top]

