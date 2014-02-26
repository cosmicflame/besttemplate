besttemplate
============

The Best Template on the Web!

License
=======
This template project is licensed under the MIT license.  See the LICENSE file for details.  Please feel free to delete
the LICENSE and README once you've started making your own changes - this is only a template, after all.

Purpose
=======

A template project for writing Backbone + Express apps.  You will need Node.js on the backend for this!

How to run it
=============

Development:
------------
`node server.js`
Access the website on localhost:8080

Building:
---------
- `cd scripts`
- `./build.bat`
This will run r.js to minify the JavaScript and CSS.

Running with the minified code:
-------------------------------
`node server.js --server:profile prod`
This will serve files out of the `target` directory.

Adding Express routes
=====================
Add them to the `routes` directory - have a look at `routes/config.js` to see what you need to export.
