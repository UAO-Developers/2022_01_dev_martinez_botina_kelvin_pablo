$(document).ready(function(){
    fetch("personajes.json").then(response => {
        return response.json().then(data => {
            let html = "";
            let i = 0;

            data.personajes.forEach( element => {
                console.log(element);
                i++;
                html += '<tr id="' + element.nombre + '" onclick="cambiarcolor(' + element.nivel + ', ' + "'" + element.nombre + "'" +')"><th scope="row">' + i + '</th> <td>' + element.nombre + '</td> <td>' + element.apellido + '</td> <td>' + element.nivel + '</td> </tr>';
            })
            $("tbody").html(html);      
        });
    });
});

function cambiarcolor(nivel, nombre){

    if(nivel < 3){
        $("#" + nombre).css('background-color', 'red');
    }else {
        if(nivel >= 3 && nivel <= 4){
            $("#" + nombre).css('background-color', 'yellow');
        } else {
            $("#" + nombre).css('background-color', 'green');
        }
    }
    
}

function mostrar(){
    let url = "http://gateway.marvel.com/v1/public/characters?apikey=8fda88d71f9d4a0d875fdf238410b30c&ts=99999&hash=792a2cc01e2d52af596aa66cd3d38497";
    $.get(url, function(data, status){
        let personajes = data.data.results;
        let html = '<div class="container-fluid row">';
        personajes.forEach(element => {
            console.log(element);
            html += '<div><img width="200" height="200" src="' + element.thumbnail.path +"."+ element.thumbnail.extension + '"/>' + element.name + "</div>";
        });
        $("#contenido").html(html);
    });
}