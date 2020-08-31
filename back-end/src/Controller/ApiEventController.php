<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ApiEventController extends AbstractController
{
    /**
     * @Route("/event", name="api_event")
     */
    public function index(HttpClientInterface $client)
    {

        // call l'api
        $response = $client->request(
            'GET',
            'http://api.eventful.com/json/events/search?app_key=qHtRzbRHr3TvZgNm&location=FRA&page_size=20&city_name='
        );

       /* print_r($response->getContent());*/
        // retourner le result
        return $this->json(json_decode($response->getContent()));
    }
}
