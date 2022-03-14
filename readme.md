![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

Source code for BarcelonaJS Design systems for multiple frameworks, one tool to rule them all presentation demo library.


## Step 0: Kick-Off
1.  Create a new stencil project.
    ```bash
    $ npm init stencil
    ```
    * When prompted, select `component` as starter.

## Step 1: Creating the first DS component: A button
1. Remove the generated component example code.
    *  	Remove `my-component` folder in `src/components`
    *  	Remove `utils` folder in `src/`   

2. Generate the button component boilerplate by running: 
    ```bash
    $ npm run generate
    ```
   * Remember to include a dash ``-`` in the component name.
   
3. Add the button implementation (see commit).

4. Use the `index.html` located in `src` to instantiate the component and test it.

5. Check the results by running a dev environment in dev mode with:
    ```bash
       $ npm start
    ```

6. Make sure all auto-generated files are up to date with the latest changes: 
    ```bash
       $ npm run build
    ```

## Step 2: React integration
1. With the `lerna` monorepo structure in place, clone the following repository in the ``packages/`` folder:
    ```bash
       $ git clone https://github.com/ionic-team/stencil-ds-react-template my-ds-react
    ```
   * Remove the ``.git`` inside of `packages/my-ds-react` to avoid having this folder as a git submodule inside the main repository.
   * __Hint:__ The `lerna` monorepo structure was achieved by moving some files around and running `lerna init` on the root folder repository.
   For more details, check the first commit of this branch. 
2. Update the package name and link the main Stencil web component dependency in the React wrapper.
    * __Hint:__ ``lerna add my-ds --scope=my-ds-react`` will link the packages and install missing dependencies.
    * Remove the ``private`` field in the package.json to make it publishable.
3. Install `@stencil/react-output-target` in the stencil package.
4. Go to ``stencil.config.ts`` and include the React output-target.
    * Update the `corePackageName` field
	* Update the `proxyFile` field
5. Run build in the Stencil project and check that the files are correctly generated in the React package.
 