# Publish your final CV site on Github

Creating a Curriculum vitae webpage, using Boostrap CSS and development tools.

### Development environment

  - Install development environment
     1. Download and install Node.js to get npm:
      * [Node.js] - A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. It allows to run JavaScript outside of the browser.
     2. Use npm to install yeoman (project skeletons generator - scaffolding), bower (web dependencies manager) and grunt (task runner):
```sh
$ npm install -g yo bower grunt-cli
```
     3. Use npm to install the desired yeoman generator:
* [Yeoman generator]
```sh
$ npm install -g generator-webapp
```
     4. Download and install GitHub Windows to get yo:
    * [GitHub Windows]

### Create a new project
- Create project folder in the directory C:\Users\username\Documents\GitHub
> Example: C:\Users\melissa.voirol\Documents\GitHub\monCV
- Open Git Shell from your project directory:
 - Use yeoman generator to scaffold a new application:
```sh
$ yo webapp
```
 * Select Bootstrap.

### Sign up for GitHub
- Suscribe a GitHub account
 * [GitHub]
- Create a new repository like myproject.github.io
> Example: melissavoirol.github.io

### Build the dist directory to deploy your project
- Open Git Shell from your project directory:
```sh
$ grunt build
```

### Copy your dist directory content in your repository GitHub
- Go to C:\Users\melissa.voirol\Documents\GitHub\melissavoirol.github.io
- Copy the dist directory content from C:\Users\melissa.voirol\Documents\GitHub\monCV\dist

### Preview your app in the browser
- Start the server
```sh
$ grunt serve
```
Edit a file and watch livereload in action.
- Stop the server (ctrl+c)

[Node.js]:https://nodejs.org/
[Yeoman generator]:https://github.com/yeoman/generator-webapp
[GitHub Windows]:https://windows.github.com/
[GitHub]:https://github.com/
