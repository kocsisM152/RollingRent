async function modosit(event, id) {
    event.preventDefault();
    const marka = document.querySelector('#marka').value;
    const tipus = document.querySelector('#tipus').value;
    const evjarat = document.querySelector('#evjarat').value;
    const szarmazasiorszag = document.querySelector('#szarmazasiorszag').value;
    const leiras = document.querySelector('#leiras').value;
    const ar = document.querySelector('#ar').value;
    const kedvezmeny = document.querySelector('#kedvezmeny').value;
    const kep1 = document.querySelector('#kep1').value;
    const kep2 = document.querySelector('#kep2').value;
    const kep3 = document.querySelector('#kep3').value;
    console.log(kep1, kep2, kep3);
    

    const response = await fetch(`/api/cars-backend/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            marka,
            tipus,
            evjarat,
            szarmazasiorszag,
            leiras,
            ar,
            kedvezmeny,
            kep1,
            kep2,
            kep3,
        }),
    });

    const resp = await response.json();

    if (response.ok) {
        window.alert(resp.msg);
        window.location.href = '/api/cars-backend';
    } else {
        console.log(resp.msg);
    }
}
