<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\Auth\FacebookService;
use App\Services\UserService;
use DateTime;
use Exception;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class FacebookController extends ApiController
{
    /**
     * @Route("/facebook/{token}", name="facebook")
     * @param $token
     * @param JWTTokenManagerInterface $jwtManager
     * @param UserRepository $userRepository
     * @param FacebookService $facebookLoginService
     * @param UserService $userService
     * @return JsonResponse
     */
    public function index(
        $token,
        JWTTokenManagerInterface $jwtManager,
        UserRepository $userRepository,
        FacebookService $facebookLoginService,
        UserService $userService
    ) {
        try {
            $userData = $facebookLoginService->getUserFromToken($token);
            $user = $userRepository->getByEmail($userData["email"]);

            if(!$user){
                $user = $userService->register(
                    $userData["picture_url"],
                    $userData["name"],
                    $userData["first_name"],
                    $userData["last_name"],
                    $userData["email"],
                    new DateTime(),
                    "facebook_connect"
                );
            }

            return new JsonResponse(['token' => $jwtManager->create($user)]);

        } catch(Exception $e) {
            return $this
                ->setStatusCode(500)
                ->respondWithErrors(["errors" => $e]);
        }
    }
}

