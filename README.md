# Publish your final CV site on Github

Creating a Curriculum vitae webpage, using Boostrap CSS and development tools.

## Development environment

### Install development environment

- Download and install [Node.js] (it allows to run JavaScript outside of the browser) to get npm:

- Use npm to install yeoman (project skeletons generator - scaffolding), bower (web dependencies manager) and grunt (task runner):
```sh
$ npm install -g yo bower grunt-cli
```

- Use npm to install the desired [yeoman generator]:
```sh
$ npm install -g generator-webapp
```

- Download and install [GitHub Windows] to get yo

## Create a new project

- Create project folder in the default GitHub directory

> Example: C:\Users\melissa.voirol\Documents\GitHub\monCV

- Open Git Shell from your project directory:

1. Use yeoman generator to scaffold a new application:
```sh
$ yo webapp
```

2. Select Bootstrap

## Sign up for GitHub

- Suscribe a [GitHub] account

- Create a new repository

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

- Start the server:
```sh
$ grunt serve
```

Edit a file and watch livereload in action.

- Stop the server:
> ctrl+c

## Access your final CV site
* Go to http://melissavoirol.github.io/

[Node.js]:https://nodejs.org/
[yeoman generator]:https://github.com/yeoman/generator-webapp
[GitHub Windows]:https://windows.github.com/
[GitHub]:https://github.com/
