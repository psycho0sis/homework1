const url = "./data.json";

async function deleteUsers() {
    const data = url;
    const res = await fetch(data);
    const users = await res.json();
    const filterUsers = users.filter((item, index, array) => array.findIndex(elem => (JSON.stringify(elem) === JSON.stringify(item))) === index)
    console.log(filterUsers)
}

deleteUsers()