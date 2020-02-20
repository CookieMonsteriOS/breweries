
### Project Overview:

This is a small directory application, which lets users to find small brewing establishments around the USA that serve beer and food.  The user can enter a search term such as ‘Pizza’, in order to find small breweries, which serve beer and pizzas. 

#### Technical:

In order to run the application:

1.	Clone repository and open in IDE.
2.	Change directory to using: cd brewery-search from terminal
3.	Then run npm install to get dependencies, in terminal. 
4.	In order to view in the browser run npm start in the terminal.
5.	Open in browser at http://localhost:3000/
6.	In order to run unit tests navigate to brewery-search from terminal and then use npm test.

#### Packages and API’s used:

1.	Bootstrap and React Strap 
2.	React JS
3.	Enzyme and Jest for unit testing
4.	Webpack server.
5.	Open Brewery API (https://www.openbrewerydb.org/) to get brewery information.

#### Usage:

1.	Locate search box and enter term ‘Pizza’
2.	Click search button and results will appear.
3.	Click website link to navigate to brewery homepage from table.

### Questions:

#### Describe and justify some of the key decisions you made in your project. Why did you decide to do what you did? How does your choice compare to the alternatives?

* After analysing the requirements needed for the project I began sourcing the data needed for the application. This was important, as it would allow me to plan the UI in the next step.
* Once I had found the needed API from Open Brewery and identified the needed parameters in order to retrieve the data, I was able to determine what was needed on the user interface, in terms of components, and how these components should communicate. 
* React was chosen, as it allowed me to create functional and non-functional reusable components, which could be used again, as the application scaled. 
* I also decided to create a separate API manager, which would house all the CRUD operations. I chose to write one generic method which regardless of call type (i.e. POST, GET etc.), would make the calls, with object communicating through exposed ‘work flow’ methods, allowing encapsulation and also reusability, by different components if needed. Furthermore it would also prevent excessive chaining of methods, and thus making code maintenance easier in the long term.
* Angular would have been an alternative, as the typescript support would help to mitigate problems with a lack of type inference in JavaScript. Furthermore the HttpClient module would have created a streamlined API Manager to handle the CRUD operations without the need for alot of custom code. 


#### Describe in detail a few things you would have done differently if starting again. What was your rationale that led to the initial decision? What made you realise that a different option would have been a better choice? Why do you believe it to be a better choice? 

* Component Planning: I think starting again I would have spent more time thinking through the components, which would have been needed. It would allowed me to be better identify, additional components  that could be reused once the application scales and handled issues with errors. Currently data flows from parent to child after the API call, which was fine for a simple text input. However once the application scales, it would wise to group inputs together and manage the state and validation for these in one area, rather than housing it in the main body of the application. This would be a better approach, as the state object would be more manageable. Again this was only realised after I began thinking about additional features.
* Having more of a test driven approach: This provides a broader range of coverage and would make it easier to capture any bugs and provide quality assurance for the code. 
* More attention to error handling: I think it would have been wiser to take into consideration scenarios where the application could fail. For example the server returning data, which is unexpected. Having a default callback function passed into a chained ‘catch’,  method would help resolve this problem.

#### Describe in detail a few things you would have done had you more time. How would this addition/change benefit the application? What negative impact, if any, does its absence have on the application? 

* TDD: I would have started with a more of test driven development approach as mentioned above would have given greater quality assurance with regard to the code. Furthermore as the application scales it would help not only capture bugs but would also stop any regression bugs in the future. This would have taken longer, but the benefits would far our weighed the time taken.
* Errors: If I had more time I would have spent more time thinking about how to protect the application from errors, such as a failure from the server when retrieving data. Evaluating against a  response status code for example, would allow us to create a scenario where the application fails gracefully, and provides the user with some context.
* CSS: From a purely maintenance perspective it would be better to use SASS as it would easier reuse the colour values, as the CSS and application grows bigger.
* Placeholder Component: This component would have been better served with a prop, which allowed a string of text to be sent down to it. This would have allowed true reusability and more flexibility when used as the application scales. 
* Modal: At the moment a simple alert box is shown when the user does not enter a value into the search value. However it would be better UX to have a modal component with custom text as it add more usability to the application.
* Security: I would have addressed or looked at how resolve issues around;  Using target="_blank", in the anchor elements.


## Create React Scripts:

Project can be run with following scripts.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
