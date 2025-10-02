async function szerkesztes(id) {
    const nev = document.getElementById('nev').value;
    const statusz = document.getElementById('statusz').value;

    if (statusz === "") {
        window.alert('A státusz nem lehet üres!');
        return;
    }

    const response = await fetch(`/users-backend/modosit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ nev, statusz }),
    });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location = '/users-backend';
    } else {
        window.alert(valasz.msg);
    }
}

async function torles(id) {
    const response = await fetch(`/users-backend/torol/${id}`, {
        methode: 'DELETE',
    });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location = '/users-backend';
    } else {
        window.alert(valasz.msg);
    }
    
}