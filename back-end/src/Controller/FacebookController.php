<?php

namespace App\Controller;

use App\Entity\User;
use Exception;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use League\OAuth2\Client\Token\AccessToken;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class FacebookController extends ApiController
{


    /**
     * @Route("/facebook/{token}", name="facebook")
     */
    public function index($token, JWTTokenManagerInterface $jwtManager)
    {
        $provider = new \League\OAuth2\Client\Provider\Facebook([
            'clientId'          => '1252480801804114',
            'clientSecret'      => '5e121f99277091aee9961c8a78241d14',
            'redirectUri'       => 'https://localhost:3000/',
            'graphApiVersion'   => 'v2.10',
        ]);

        try {
            $accessToken = new AccessToken(["access_token" => $token]);
            $user = $provider->getResourceOwner($accessToken);
        } catch (Exception $e) {
            return $this
                ->setStatusCode(500)
                ->respondWithErrors(["errors" => $e]);
        }

        $userData = [
            "avatar" => $user->getPictureUrl(),
            "name" => $user->getName(),
            "first_name" => $user->getFirstName(),
            "last_name" => $user->getLastName(),
            "email" => $user->getEmail(),
        ];

        $repository = $this->getDoctrine()->getRepository(User::class);
        $repositoryResult = $repository->getByEmail($userData["email"]);

        if(!$repositoryResult){
            $entity = $this->getDoctrine()->getManager();

            $date = new \DateTime();
            $user = new User();

            $user->setAvatar($userData["avatar"]);
            $user->setUsername($userData["name"]);
            $user->setFirstName($userData["first_name"]);
            $user->setLastName($userData["last_name"]);
            $user->setEmail($userData["email"]);
            $user->setBirthday($date);
            $user->setPassword("facebook_connect");

            $entity->persist($user);
            $entity->flush();

            return $this->respondCreated(["data" => $user]);

        }
        return new JsonResponse(['token' => $jwtManager->create($repositoryResult)]);

//        return $this->json($userData);
    }
}

