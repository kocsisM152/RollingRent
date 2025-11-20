import "./LeadPage.css";
import Navbar from "../components/Navbar";

const LeadPage = () => {
  const stilus = {
    ".lead-kontener": {
      color: "white",
      marginTop: "3em",
    },
  };
  return (
    <div className="lead-kontener" style={stilus}>
      <Navbar />
      <div>
        <h1>lead</h1>
      </div>
    </div>
  );
};

export default LeadPage;
