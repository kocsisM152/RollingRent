async function letrehoz(event) {
    event.preventDefault();
    const marka = document.querySelector('#marka').value;
    const tipus = document.querySelector('#tipus').value;
    const evjarat = document.querySelector('#evjarat').value;
    const szarmazasiorszag = document.querySelector('#szarmazasiorszag').value;
    const ar = document.querySelector('#ar').value;
    const kep = document.querySelector('#kep').value;

    console.log(marka, tipus, evjarat, szarmazasiorszag, ar, kep);
    

    const response = await fetch('/new-car', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            marka,
            tipus,
            evjarat,
            szarmazasiorszag,
            ar,
            kep,
        }),
    });

    console.log(response);

    if (response.ok) {
        const resp = await response.json();
        window.alert(resp.msg);
        // window.location.href = '/car-backend';
    }
}