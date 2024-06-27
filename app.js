function getsearch(){
    var getValue = document.getElementById("search")

    
fetch(`https://api.github.com/users/${getValue.value}`)
.then (function(data){
    return data.json()

})
.then (function(data){
    console.log(data)
    var getDiv =document.getElementById("showcard")
    getDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${data.avatar_url} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">${data.bio}</p>
    <a href=${data.html_url} target="_blank" class="btn btn-primary">Go to Profile</a>
  </div>
</div>`
    getValue.value= ""

})
.catch(function(err){
    console.log(err)

})


}



// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     document.getElementById("name").innerHTML = data.name;
//     document.getElementById("bio").innerHTML = data.bio;
//     document.getElementById("location").innerHTML = data.location;
//     document.getElementById("followers").innerHTML = data.followers;
//     document.getElementById("following").innerHTML = data.following;
//     document.getElementById("avatar").src = data.avatar_url;
//     })

