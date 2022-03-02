function submitData (name, email) {
    const userInfo = {
        name: name,
        email: email
    };

    return fetch(`http://localhost:3000/users`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(resp => resp.json())
    .then(data => {
        renderInfo(data)
    })
    .catch(message => {
        const h3= document.createElement(`h2`)
        h3.textContent = message
        document.querySelector(`body`).appendChild(h3)
    })
}

function renderInfo(Obj) {
    const h3 = document.createElement('h3');
    h3.textContent = `User Name: ${Obj.name}, User Email: ${Obj.email} user id: ${Obj.id}`
    h3.id = Obj.id
    const body = document.querySelector('body')
    body.append(h3)
}