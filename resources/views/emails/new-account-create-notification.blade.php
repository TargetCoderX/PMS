<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Hello {{ $user->name }}!</h1>
    <p>Thank you for signing up to the {{ env('APP_NAME') }}.</p>
    <p>
        We have created a new account for you. As part of the account creation process, we have also created a temporary password for you to use.
    </p>
    <p>
        Clickthe link below to add organization
        <a href="{{ route('verify-email', ['token' => $token]) }}">Click here to reset your password</a>
    </p>
</body>
</html>
