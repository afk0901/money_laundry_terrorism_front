# Customer due diligence regarding money laundering and terrorism - Form Wizard made with React

Customer due diligence regarding to money laundering and terrorism, is a form that legally needs to be filled out by certain institutions, especially financial ones or real estate sales, in the fight against money laundering and terrorism. This specific project focuses on real estate sales or properties, and all the text for the forms is in icelandic and aims to follow icelandic laws regarding the content needed to be filled out.

The project is a form wizard where the user is guided through the process of filling that form in. It's eight steps, one form for each step and includes a step bar that the user can click on to go to any steps the user wants. The step bar indicates if the corresponding step is valid or not when the next button is clicked and then finally, it will produce a PDF document with all the data.

## Known bugs

- After PDF creation, there is a back button. When that button is clicked, the displayed form input is invalid.

## Features

### Useable features

- Step bar that shows the invalid and valid state depending on if the form is valid when the next button is clicked. Otherwise, empty icons.
- The data filled in the forms persists as long the user does not close the browser or leave the page.
- Next and back buttons that show the next and previous steps.

### Future features

- Validation only activates on blur to prevent inconvenience for the user when typing in the data and providing better UX.
- PDF generation - generating a PDF document from all the data
- Connection to a backend - API connection to a backend API so the data can be saved as the user processes the form.

## Screenshots

Here are a few screenshots to further clarify how the project looks and works.

![image](https://github.com/afk0901/money_laundry_terrorism_front/assets/10889206/8d4225c8-2952-4691-ba54-aa69f74ca373)

As shown in the screenshot, we have a simple form and a step bar, and as this is the first step then, only the next button is shown. The step bar has step labels attached to each step, and steps that are not yet processed have empty icons. In this case, all of them are empty.

![image](https://github.com/afk0901/money_laundry_terrorism_front/assets/10889206/ccb4df86-37e7-46e0-8a1e-11283fd3c63e)

Here we have filled in the form but we cleared the field again and now we get a validation error, as shown in red.

![image](https://github.com/afk0901/money_laundry_terrorism_front/assets/10889206/14fe1de0-7a00-4136-a665-8673cd848a0e)

Next, we clicked on the Next button, but as we left the field empty validation error is shown in the step bar.

![image](https://github.com/afk0901/money_laundry_terrorism_front/assets/10889206/13fa18ac-6437-438a-997a-ae1fa0d68114)

As we fill in the correct step and we click on the next button we can see the next step and the previous button.

All this process is done for all the steps in the step bar until the end of the wizard. After that, an overview is displayed.

![image](https://github.com/afk0901/money_laundry_terrorism_front/assets/10889206/3f3566f1-94f6-466b-a652-822ce970501b)

This is an example of how it could look when everything is filled out to verify with the user that the information are all correct
before we later on produce a PDF document with all the information.

# Tools used in the project

- React 18.2.0
- React Testing Library 13.4.0
- Bootstrap 5.2 for styling and responsiveness

# Backstory

The project originated from real business requirements for a company. Due to changing circumstances, it was not deployed and has since been continued and maintained as a personal project.

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
