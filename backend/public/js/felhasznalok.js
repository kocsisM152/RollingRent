async function torol(id) {
    try {
        const response = await fetch(`/api/users-backend/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const vissza = await response.json();

        if (response.ok) {
            window.alert(vissza.msg);
            window.location.href = '/api/users-backend';
        } else {
            window.alert(vissza.msg);
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function modosit(id, nev, email, admi) {
    try {
        const adminok = document.getElementsByName(admi);
        let admin = '';
        if (adminok[0].checked) admin = adminok[0].value;
        else admin = adminok[1].value;
        console.log(id, nev, email, admin);


        const response = await fetch('/api/users-backend', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, nev, email, admin }),
        });

        const valasz = await response.json();

        if (response.ok) {
            window.alert(valasz.msg);
            window.location.href = '/api/users-backend';
        }
    } catch (error) {
        console.log(error.message);
    }
}
