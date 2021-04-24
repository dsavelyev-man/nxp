<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>nxp</title>

        <script defer src="{{getenv("APP_MODE") === "development" ? "http://localhost:3000/index.js" : asset("assets/index.js")}}"></script>
        <link rel="stylesheet" href="{{getenv("APP_MODE") === "development" ? "http://localhost:3000/index.css" : asset("assets/index.css")}}">
    </head>
    <body class="antialiased">
    <div id="nxp">
    </div>
    </body>
</html>
