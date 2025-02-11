public with sharing class weatherAppController {
    @AuraEnabled
    public static string getWeatherDetails(String input) {
        String url='https://api.openweathermap.org/data/2.5/weather?q=' + input + + '&units=metric'+getKey() ;
        string response=GetResponse(url);
        return response;
    }

    public static string getResponse(string strUrl){
        Http h=new Http();
        HttpRequest req= new HttpRequest();
        HttpResponse res=new HttpResponse();
        req.setMethod('GET');
        req.setEndpoint(strUrl);
        req.setTimeout(12000);
        res=h.send(req);
        String responseBody=res.getBody();
        return responseBody;
    }

    public static string getKey(){
        string key='1dd7b8cfadae854283b1d3a1f17cc7c6';
        string output= '&appid=' + key;
        return output;
    }
}