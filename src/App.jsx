import { useEffect, useState } from "react";
import { GoogleMapComp } from "./components/GoogleMapComp";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [eventInfo, setEventInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/categories/12");
      const FloudsRes = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/categories/12");
      const Fres = await FloudsRes.json();
      const Vres = await res.json();

      setEventInfo({ events: [...(Fres?.events || []), ...(Vres?.events || [])] });
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return <div>{!loading ? <GoogleMapComp eventInfo={eventInfo} /> : <Loading />}</div>;
}

export default App;
