<?php

namespace App\Services\Auth;

use League\OAuth2\Client\Provider\Facebook;
use League\OAuth2\Client\Token\AccessToken;

class FacebookService
{
    public function getUserFromToken($token): array
    {
        $provider = new Facebook([
            'clientId'          => '1252480801804114',
            'clientSecret'      => '5e121f99277091aee9961c8a78241d14',
            'redirectUri'       => 'https://localhost:3000/',
            'graphApiVersion'   => 'v2.10',
        ]);

        $accessToken = new AccessToken(["access_token" => $token]);
        $user = $provider->getResourceOwner($accessToken);

        return $user->toArray();
    }
}