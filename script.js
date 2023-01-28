function getUsers() {

    $.ajax({
        url: 'http://127.0.0.1:8000/api/users',
        method: 'GET',
        dataType: 'json'
    }).done(function (result) {
        console.log(result);

        for (var i = 0; result.length; i++) {

            $('#nome').prepend(result[i].name + '</br>');
            
        }
        
    });
}

getUsers();





