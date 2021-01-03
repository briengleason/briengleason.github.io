function getRandomSite() {

    var xhr = new XMLHttpRequest();
    var method = "GET";
    var URL = "https://api.brien.link/api/random_site"
    var async = false;
    var user = "admin";
    var password = "admin";
    xhr.open(method, URL, async, user, password)
    xhr.setRequestHeader('Accept','application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');


    var res = document.getElementById('answer');

    try {
        xhr.send();
        if (xhr.status != 200) {
            res.innerHTML = `Error ${xhr.status}: ${xhr.statusText}`;
        } else {
            res.innerHTML = xhr.response.link(xhr.response);
        }
    } catch(err) {
        res.innerHTML = "Request failed";
    }
}