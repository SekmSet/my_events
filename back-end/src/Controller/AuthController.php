<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Form\UpdateUserFormType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;

class AuthController extends ApiController
{
    public const avatarPath = '/uploads/default.jpg';

    public function register(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder): JsonResponse
    {
        //$data = json_decode($request->getContent(), true);

        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);

        $form->submit($request->request->all(), false);

        if ($form->isValid()) {
            $user->setPassword(
                $encoder->encodePassword($user, $form->get('password')->getData())
            );

            if(!$request->files->has('avatar')) {
                $user->setAvatar(self::avatarPath);
            } else {
                $image = $request->files->get('avatar');
                $fichier = md5(uniqid('', true)).'.'.$image->guessExtension();
                $image->move(
                    $this->getParameter('images_directory'),
                    $fichier
                );
                $user->setAvatar("/uploads/$fichier");
            }

            $em->persist($user);
            $em->flush();

            return $this->respondCreated("ok");
        }

//        print_r($this->getErrorsFromForm($form));
        return $this
            ->setStatusCode(500)
            ->respondWithErrors($this->getErrorsFromForm($form));
    }

    /**
     * @Route("/api/me/update", name="update_page")
     * @param Security $security
     * @param UserRepository $userRepository
     * @param Request $request
     * @param EntityManagerInterface $em
     * @return JsonResponse
     */
    public function meUpdate(Security $security, UserRepository $userRepository, Request $request, EntityManagerInterface $em): JsonResponse
    {
        /** @var User $currentUser */
        $currentUser = $security->getUser();
        $user = $userRepository->getByEmail($currentUser->getEmail());

        $form = $this->createForm(UpdateUserFormType::class, $user);
        $form->submit($request->request->all(), false);

        if ($form->isValid()) {

            if($request->files->has('avatar')) {
                $image = $request->files->get('avatar');
                $fichier = md5(uniqid('', true)).'.'.$image->guessExtension();
                $image->move(
                    $this->getParameter('images_directory'),
                    $fichier
                );
                $user->setAvatar("/uploads/$fichier");
            }

            $em->persist($user);
            $em->flush();

            return $this->response($user->toArray());
        }
        return $this
            ->setStatusCode(500)
            ->respondWithErrors($this->getErrorsFromForm($form));
    }

    /**
     * @Route("/api/me", name="me_page")
     * @param TokenStorageInterface $tokenStorage
     * @return JsonResponse
     */
    public function me(TokenStorageInterface $tokenStorage): JsonResponse
    {

        /** @var User $user */
        $user = $tokenStorage->getToken()->getUser();

        return $this->response($user->toArray());
    }

    /**
     * @Route("/profil/{id}", name="profil_page")
     * @param UserRepository $userRepository
     * @param $id
     * @return JsonResponse
     */
    public function profil(UserRepository $userRepository, $id): JsonResponse
    {
        $user = $userRepository->getById($id);
        return $this->response($user->toArray());
    }
}
