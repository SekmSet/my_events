<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;

class AuthController extends ApiController
{
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
                $user->setAvatar('http://127.0.0.1:8000/uploads/default.jpg');
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

    private function getErrorsFromForm(FormInterface $form)
    {
        $errors = array();
        foreach ($form->getErrors() as $error) {
            $errors[] = $error->getMessage();
        }
        foreach ($form->all() as $childForm) {
            if ($childForm instanceof FormInterface) {
                if ($childErrors = $this->getErrorsFromForm($childForm)) {
                    $errors[$childForm->getName()] = $childErrors;
                }
            }
        }
        return $errors;
    }

    /**
     * @Route("/me/update", name="me_page")
     */
    public function meUpdate(){
        return '';
    }

    /**
     * @Route("/api/me", name="me_page")
     * @param TokenStorageInterface $tokenStorage
     * @return JsonResponse
     */
    public function me(TokenStorageInterface $tokenStorage){

        /** @var User $user */
        $user = $tokenStorage->getToken()->getUser();

        return $this->response($user->toArray());
    }



}
