***Node_modules not uploaded
Because a .gitignore is generated when you generate a project, and it contains the line that excludes the node_modules repository from being pushed.

This is done because the folder can be very heavy (several hundreds of Mb), and it would cause your pushes to be very long, and not up-to-date with your semver.

If other users want to run your project locally, they will have to run npm i before ng serve. 



  # property-finder

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view project in browser
  
![Screenshot (286)](https://github.com/iAshuRani/Property-finder/assets/118686131/49494a5a-c71b-4015-9647-c9bc5545fb3c)
![Uploading Screenshot (293).png…]()
![Uploading Screenshot (291).png…]()
![Screenshot (289)](https://github.com/iAshuRani/Property-finder/assets/118686131/13d7035b-4ed7-462f-a4bd-dc616c2a2875)
