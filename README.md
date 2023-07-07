# Customer due diligence regarding money laundry and terrorism - Form Wizard made with React

Customer due diligence regarding money laundry and terrorism is a form that legally needs to be filled out by certain institutions, especially financial ones or real estate sales, in the fight against money laundry and terrorism. This specific project focuses on real estate sales or properties, and all the text for the forms is in Icelandic and aims to follow Icelandic laws regarding the content needed to be filled out. 

The project is a form wizard where the user is guided through the process of filling that form in. It's eight steps, one form for each step, and includes a step bar that the user can click on to go to any steps the user wants. The step bar indicates if the corresponding step is valid or not when the next button is clicked,  and then finally, it will produce a PDF document with all the data.

It's all in progress now and has yet to be released. Please take a look at the features section for finished features and additional information about them.

# Features

### Useable features

- Step bar that shows the invalid and valid state depending on if the form is valid when the next button is clicked. Otherwise, empty icons.
- The data filled in the forms persists as long the user does not close the browser or leaves the page.
- Next and back buttons that show the next and previous steps.

### Future features

-  Bug fix for the step bar - it's not working as intended just yet. Work in progress.
-  PDF generation - generating a PDF document from all the data
-  Connection to a backend - API connection to a backend API so the data can be saved as the user processes the form. 

# Tools used in the project

- React 18.2.0
- React Testing Library 13.4.0

# Backstory

Once up on time, an unnamed company hired a person. The person worked there for a while before changing their mind on something else. The unnamed company asked for this project to be done for them, but as time passed, the situation changed in a way this project will be a personal one for now. The situations can't be explained here as they are confidential, but that's how this all started. Then time went on, and the author decided to continue with the project even tho it may not be used by the company, as it's a fun project to work on and improves front-end skills.

# Getting Started

## Setting up the project

Clone the repository and then run: `npm install`, which should be sufficient to install everything. Below are available scripts, for example, for running the app and running tests. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Copyright

Copyright © 2023 Arnar Freyr Kristinsson. All rights reserved.
