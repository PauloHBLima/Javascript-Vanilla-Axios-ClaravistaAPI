const url = "http://localhost:3001/navigation/session_id"
const newUser = {
    name: "Goku",
    email: "goku@email.com",
    password: "8000",
}

function getUser() {
    axios.get(url)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}

getUser()

function addNewUser() {

    axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//addNewUser()

function deleteUser() {
    axios.delete(`${url}/6343843702328c9c67842a3d`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//deleteUser()

function getOneUser(){
    axios.get(`${url}/341ee52d9454ed702d1446e`)
    .then(response => {
    const data = response.data
    renderResults.textContent = Json.stringfy(data)
    })
    .catch(error => console.log(error))
}

//getOneUser();