<?php

namespace App\Services;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

class UserService
{
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $em;

    /**
     * UserService constructor.
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function register($avatar, $name, $first_name, $last_name, $email, $date, $password): User {
        $user = new User();
        $user->setAvatar($avatar);
        $user->setUsername($name);
        $user->setFirstName($first_name);
        $user->setLastName($last_name);
        $user->setEmail($email);
        $user->setBirthday($date);
        $user->setPassword($password);

        $this->em->persist($user);
        $this->em->flush();

        return $user;
    }
}