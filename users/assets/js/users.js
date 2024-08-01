async function getData(userId) {
  let user = await fetch('https://dummyjson.com/users/' + userId).then(res => res.json());
  let { todos } = await fetch(`https://dummyjson.com/users/${userId}/todos`).then(res => res.json());

  const usersContentItem = document.querySelector('.usersContentItem');
  usersContentItem.innerHTML += `
  <div class="usersContent">
        <h2>${user.firstName} ${user.lastName}</h2> 
        <p><strong>Cinsiyet: </strong>${user.gender}</p>
        <p><strong>Email: </strong>${user.email}</p>
        <p><strong>Telefon No: </strong>${user.phone}</p>
        <p><strong>Adres: </strong>${user.address.address}</p>
        <p><strong>Şehir: </strong>${user.address.city}</p>
        <p><strong>Sokak: </strong>${user.address.state}</p>
        <p><strong>Ülke: </strong>${user.address.country}</p>
        <ul id="list" class="list">${todos.map(x => `<li>${x.todo} = ${x.completed}</li>`).join('')}</ul>
        </div>`;
}

for (let i = 1; i <= 30; i++) {
  getData(i);
}

