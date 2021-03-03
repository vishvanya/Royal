
function submitCustomerInfo(form) {
    var fullName = $('#fullName').val()
    var mobileNumber = $('#mobileNumber').val();
    var emailAddress = $('#emailAddress').val();
    var message = $('#message').val();
    if (fullName && mobileNumber && emailAddress && message) {
        let notifer = new AWN();


        Email.send({
            Host: "smtp.gmail.com",
            Username: "vishwanyar@gmail.com",
            Password: "**********",
            To: "vishvanyaRajendran@gmail.com",
            From: "vishwanyar@gamail.com",
            Subject: "customer Request",
            Body: '<html><h2>customerDetails</h2><br>\n\
            <div> Name:' + fullName + '</div><br>\n\
            <div> Mobile Number:' + mobileNumber + '</div><br>\n\
            <div> Message:' + message + '</div></html>'
        }).then(function (message) {
            console.log('--------->>>', message);
            if (message == 'OK') {
                notifer.success('successfully submited');
                console.log('-------->>>', message);
                form.reset();
            } else {
                notifer.alert('service Error');




            }

        });

    }

}




