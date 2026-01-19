import Navbar from "../components/Navbar";

const Fizetes = () => {
  const berles = JSON.parse(
    localStorage.getItem("berles")
  );

  if (!berles) {
    return (
      <div>
        <Navbar />
        <p>Nincs aktív bérlés</p>
      </div>
    );
  }

  const { napiAr, berlesNapok, kezdet, vege } = berles;
  const vegosszeg = napiAr * berlesNapok;

  return (
    <div>
      <Navbar />

      <div className="fizetes-container">
        <h1>Fizetés</h1>

        <div className="fizetes-kartya">
          <p>Kezdete: {kezdet}</p>
          <p>Vége: {vege}</p>
          <p>Bérlés hossza: {berlesNapok} nap</p>
          <p>Napi ár: {napiAr.toLocaleString()} Ft</p>

          <hr />

          <p className="fizetes-cim">Bérlés végösszeg</p>
          <p className="fizetes-ar">
          {vegosszeg.toLocaleString()} Ft
          </p>

          <button
  className="fizetes-gomb"
  onClick={() => {
    // Itt jönne a fizetés backend logika (pl. Stripe, SimplePay)
    
    // Töröljük a bérlés adatot localStorage-ból
    localStorage.removeItem("berles");

    // Visszajelzés a usernek
    alert("Sikeres fizetés!");

    // Opcionális: átirányítás pl. főoldalra
    window.location.href = "/";
  }}
>
  Fizetés folytatása
</button>
        </div>
      </div>
    </div>
  );
};

export default Fizetes;
