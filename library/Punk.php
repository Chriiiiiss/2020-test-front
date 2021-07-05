<?php
// PUNK Client

Class Punk {


  public function __construct()
  {
    // What I've to do ?
    $this->apiRoot = "https://api.punkapi.com/v2/";
    
  }

  public function getBeers()
  {
    // What I've to do ?
    $curl_req = curl_init(); 

    $url = $this->apiRoot."beers?per_page=60";

    curl_setopt($curl_req, CURLOPT_URL, $url);
    curl_setopt($curl_req, CURLOPT_RETURNTRANSFER, true);

    return curl_exec($curl_req);
  }
  
  public function getBeer($id)
  {
    // What I've to do ?
    $curl_req = curl_init(); 

    $url = $this->apiRoot."beers/$id";

    curl_setopt($curl_req, CURLOPT_URL, $url);
    curl_setopt($curl_req, CURLOPT_RETURNTRANSFER, true);

    return curl_exec($curl_req);
  }
}
