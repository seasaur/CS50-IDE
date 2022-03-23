var i = 1;
function mouseOver() {
    document.getElementById("count").innerText = i++;
}

function clickFunc() {
    // document.getElementsByClassName("post-time")[0].innerHTML = Date();
    // var displayText = document.getElementsByTagName("textarea")[0].value;
    // document.getElementsByClassName("post-content")[0].innerHTML = displayText;
    var post = document.getElementById("posts");
    var number = document.getElementById("postNum").value;
    for(let i = 0; i < number; i++){
        var postTime = document.createElement("Span");
        let breakLine1 = document.createElement("Br");
        let breakLine2 = document.createElement("Br");
        var displayText = document.getElementsByTagName("textarea")[0].value;
        postTime.classList.add("post-time");
        postTime.innerHTML = Date();
        var postContent = document.createElement("Span");
        postColor(postContent);
        postStyle(postContent);
        postContent.classList.add("post-content");
        postContent.innerHTML = displayText;
        post.appendChild(postTime);
        post.appendChild(breakLine1);
        post.appendChild(postContent);
        post.appendChild(breakLine2);
    }
}

var main;
var menu;

function toggleBG() {
    main = document.getElementById("main");
    menu = document.getElementById("menu");
    main.style.display = "none";
    menu.style.display = "block";
}

function toggleMain() {
    main = document.getElementById("main");
    menu = document.getElementById("menu");
    main.style.display = "block";
    menu.style.display = "none";
}

var color;

function BGFunc() {
        color = document.getElementById("BG").value;
        document.body.style.backgroundColor = color;
}

function postColor(postText) {
//     // document.getElementById("blueButton").style.color = "blue";
//     // const btn = document.querySelector('#colorBtn');
//     const radioButtons = document.querySelectorAll('input[name="color"]');
//     textColor.addEventListener("click", () => {
//         let selectedColor;
//         for (const radioButton of radioButtons) {
//             if (radioButton.checked) {
//                 selectedColor = radioButton.value;
//                 break;
//             }
//         }
//     document.getElementsByClassName("post-content")[0].style.color = selectedColor;
//     });
// }
    var radioButtons = document.querySelectorAll('input[name="color"]');
    var selectedColor;
    for(let radioButton of radioButtons){
        if(radioButton.checked){
            selectedColor = radioButton.value;
            break;
        }
    }
    postText.style.color= selectedColor;
}

function postStyle(postText) {
    var checkBox = document.querySelectorAll('input[name="style"]');
    var textStyle;
    if (checkBox.checked == true){
      textStyle = checkBox.value;
      break;
    }
    textStyle.style.fontStyle = textStyle;
}