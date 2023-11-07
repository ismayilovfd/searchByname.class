const form = document.getElementById('first');
const input = document.getElementById('second');
const mydiv = document.getElementById('store');
const API = ('https://api.github.com/users/');

form.addEventListener('submit', (e) =>{
    (e).preventDefault(),
    kullaniciyibul()
});


 kullaniciyibul=() =>{
    fetch(API + input.value)
    .then((res) => res.json())
    .then((data) => {
        renderUsers(data)
    });
    
};


 renderUsers=(data) =>{
    mydiv.innerHTML = ""
    const h2 =document.createElement('h2')
    h2.textContent=`User: ${data.login}`;

    const image = document.createElement('img')
    image.src =data.avatar_url;

    const p = document.createElement('p')
    p.textContent = `following:${data.following}`;
    
    mydiv.append(h2,image,p)
};

