<?php

namespace App\Controller;

use App\Entity\User;
use DateTime;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AuthController extends ApiController
{

    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $em = $this->getDoctrine()->getManager();
        $request = $this->transformJsonBody($request);
        $first_name = $request->get('first_name');
        $last_name = $request->get('last_name');
        $username = $request->get('username');
        $password = $request->get('password');
        $email = $request->get('email');
        $birthday = $request->get('birthday');
        $avatar = $request->get('avatar');

        if (empty($username) || empty($password) || empty($email)){
            return $this->respondValidationError("Invalid Username or Password or Email");
        }

        $time = new DateTime($birthday);

        $user = new User();
        $user->setPassword($encoder->encodePassword($user, $password));
        $user->setFirstName($first_name);
        $user->setLastName($last_name);
        $user->setEmail($email);
        $user->setEmail($email);
        $user->setUsername($username);
        $user->setAvatar($avatar);
        $user->setBirthday($time);
        $em->persist($user);
        $em->flush();

        return $this->respondWithSuccess(sprintf('User %s successfully created', $user->getUsername()));
    }
}