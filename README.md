# Relative time
`<relative-time>` is a webcomponent for converting timestamp to user friendly relative time (e.g. 2 seconds ago, one week ago etc). 

## Installation

To use a relative-time component in your code:


 From your project folder, install the component from npm.

    npm i wc-relative-time


## Usage

    
 After Installation import the component.

   In a JavaScript module:
   
     `import './node_modules/wc-relative-time/dist/wc-relative-time.js'`;
   
   In an HTML page:
   
      ```
      <script type="module">
        import './node_modules/wc-relative-time/dist/wc-relative-time.js';     
      </script>
      ```
   ### Or:

      <script type="module" src="./path-to/some-package-name/some-component.js"></script>
      
      
 3. Add the component to your application or component:
```
  <relative-time datetime="10/20/2015" locales="en"> </relative-time>
  ```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 🚀

## Credits

 Credits to this [stackoverflow](https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time).
