document.getElementById("getUser").addEventListener("click", getUser);
document.getElementById("getUsers").addEventListener("click", getUsers);

function getUser() {
    fetch('https://jsonplaceholder.typicode.com/users/' + document.getElementById('userID').value).then(function (response){
      return response.json(); 
      }).then(function (data){
        document.getElementById('list').innerHTML = ('<div> Name: ' +data.name +'</div>')
        document.getElementById('list').innerHTML += ('<div> Phone: ' +data.phone +' </div>')
        document.getElementById('list').innerHTML += ('<p></p><b>Address</b>')
        document.getElementById('list').innerHTML += ('<div> Street: ' +data.address.street +' </div>')
        document.getElementById('list').innerHTML += ('<div> City: ' +data.address.city +' </div>')
        document.getElementById('list').innerHTML += ('<div> Zip: ' +data.address.zipcode +' </div>')
        document.getElementById('list').innerHTML += ('<div> Geo: ' +data.address.geo.lat + ','+ data.address.geo.lng +' </div>')
    })
}

  function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users').then(function (response){
      return response.json();
    }).then(function (data){
      document.getElementById('list').innerHTML = ('<table id = userTable> <th>Name</th> <th>Phone</th>');
      data.map(data => document.getElementById('userTable').innerHTML += ('<tr><td> ' + data.name + '</td><td> ' + data.phone + '</td></tr>'));   
  });
}
