export default function customCard(e) {
  const capacity = e.features[0].properties.capacity_mw;
  const fuel = e.features[0].properties.primary_fuel;
  const name = e.features[0].properties.name;
  const owner = e.features[0].properties.owner
    ? e.features[0].properties.owner
    : "unknown";
  const commissioned = e.features[0].properties.commissioning_year
    ? e.features[0].properties.commissioning_year
    : "unknown";
  const address = e.features[0].properties.address
    ? e.features[0].properties.address
    : "unknown";

  const getImage = () => {
    if (fuel == "Hydro") {
      return "assets/images/avatar/hydro.jpg";
    }
    if (fuel == "Coal") {
      return "assets/images/avatar/coal.jpg";
    }
    if (fuel == "Wind") {
      return "assets/images/avatar/wind.jpg";
    }
    if (fuel == "Solar") {
      return "assets/images/avatar/solar.jpg";
    }
    if (fuel == "Nuclear") {
      return "assets/images/avatar/nuclear.png";
    }
    if (fuel == "Gas") {
      return "assets/images/avatar/gas.png";
    } else return "assets/images/energy-icon.svg";
  };

  const image = getImage();

  return { capacity, fuel, name, owner, commissioned, image, address };
}
