
var filmList = [];
function getUsers(){
    document.getElementById("users").innerHTML = ""; //clear out previous search results first
    var searchBar = document.getElementById("userNameSearch").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        filmList = JSON.parse(this.responseText);
        console.log(filmList);
        if(filmList)
        for (var i = 0; i < filmList.length; i++) {
            var list = document.getElementById("users");
            var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'eventBox');
            var username = document.createElement("h2");
            username.setAttribute('class', 'boxHeading');
            username.innerHTML = filmList[i].username;
            newDiv.appendChild(username);

            var button = document.createElement("button");
            button.innerHTML = "VIEW USER";
            button.id = filmList[i].username;
            button.setAttribute('class', 'submitButton');

            console.log(button.id, "username");


            button.onclick = function(user) {
              viewAUser(this.id)
           }

            newDiv.appendChild(button);
            list.appendChild(newDiv);

        }
      }
    };

    xhttp.open("GET", "/searchUsers", true);
    xhttp.send(searchBar);

}

function viewAUser(username) { // view specific event
  console.log(username, "view user"); //correct name

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.location.replace("adminViewUser.html?username="+username);
    }
  };

  xhttp.open("POST", "/usernameSearched", true);
  xhttp.send();

}