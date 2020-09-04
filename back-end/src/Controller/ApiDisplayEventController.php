<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ApiDisplayEventController extends AbstractController
{
    /**
     * @Route("/event/{id}", name="event")
     * @param HttpClientInterface $client
     * @param $id
     * @return JsonResponse
     * @throws ClientExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws ServerExceptionInterface
     * @throws TransportExceptionInterface
     */
    public function index(HttpClientInterface $client, $id)
    {

        // call l'api
        $response = $client->request(
            'GET',
            'http://api.eventful.com/json/events/get?app_key=qHtRzbRHr3TvZgNm&location=FRA&id='.$id
        );
;
        /* print_r($response->getContent());*/
        // retourner le result
        return $this->json(json_decode($response->getContent()));
    }
}
