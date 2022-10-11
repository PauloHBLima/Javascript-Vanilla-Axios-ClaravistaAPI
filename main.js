const url = "http://localhost:3001/navigation"
const newUser = {
    name: "Goku10 ssj10",
    email: "goku10@email.com",
    password: "8000",
    confirmpassword: "8000"
}

const formDataJson = JSON.stringify(newUser)

function getUser() {
    axios.get(`${url}/users`)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
getUser()

/* const config = {
    body: JSON.stringify(newUser), 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

async function addNewUser(){
  try{
    const response = await fetch(`${url}/register`, config);
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(error)
  }

}
addNewUser() */


function addNewUser() {

    axios.post(`${url}/register`, formDataJson, {headers: {
        'Content-Type': 'application/json'
    }} )
    .then(response => {
        const data = response.data
        console.log(response.data)
        renderResults.textContent = data.results
    })
    .catch(error => console.log(error))
}

addNewUser()

function deleteUser() {
    axios.delete(`${url}/user/6343843702328c9c67842a3d`)
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