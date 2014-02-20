/**
 * Created with JetBrains WebStorm.
 * User: nitin
 * Date: 20/2/14
 * Time: 6:48 PM
 * To change this template use File | Settings | File Templates.
 */

function httpGet()
{
    var xmlHttp = null;
    var searchKey = document.getElementById( "search" ).value;

    var theUrl = "https://graph.facebook.com/" + searchKey;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send( null );

    setHtmlObject(xmlHttp.responseText, function(response){
        document.getElementById( "result").innerHTML = response
    });
}

function setHtmlObject (data, callback ){
    var html = "<ul>"
    console.log(eval('(' + data + ')').cover.source);
    var dataObj = eval('(' + data + ')');
    var html = "<div style='background-color: #c3dfef'><img src='"+dataObj.cover.source+"'>" +
        "<p> About : "+dataObj.about+"</p>" +
        "" +
        "</div>";

    callback(html);

}
