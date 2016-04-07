"npm start" concurrently kicks off:

	- compilation

	- node server (nodemon on localhost:8779)
		
		connects to mysql db using bookshelf and retrieves a stored user
		lives in /server folder
		separate tsconfig.json file for typescript compilation (module:commonjs is more suitable for node) - compiles using 'tsc -w -p ./server'

	- angular2 server (lite on localhost:3000)

		displays static message
		lives in /client folder
		separate tsconfig.json file for typescript compilation (angular2 requires module:system) - compiles using 'tsc -w -p ./client'

