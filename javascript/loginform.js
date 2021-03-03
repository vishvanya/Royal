function submitform() {
    var userName = $('#username').val();
    var enterpassword=$('#enterpassword').val();
    console.log(userName,enterpassword);
    if(userName.tolowercase()=="submitform" && enterpassword.tolowercase()=="submitform") {
        console.log('test');
        window.location.href="homePage.html";
    } else {
        console.log('--------->>>',userName,'------->>',enterpassword)
        console.log('username & enterpassword incorrect');
    }
}


