import Map from "../map/map"
export default function Part2en() {
    return (
      <>
      <div className="together">
      <hr className="line" />
      <h1 className="title">Part2</h1>
      </div>
       
        <p>
        Implement a map using any library of your choice (Leaflet is recommended). Search for the coordinates of &apos;Digifly Company&apos; on Google Maps, then place a tooltip at these coordinates. Ensure that the tooltip styling matches the provided design below.
        </p>
     <Map/>
      </>
    );
  }
  