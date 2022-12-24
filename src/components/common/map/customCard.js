import $ from "jquery";

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

  return $(`
    <div class="project-wrap">
      <div class="project-content">
        <div class="project-img">
          <img src=${image} />
        </div>
        <h3 class="project-title">${capacity} MW ${name}</h3>
        <p class="project-address">
          Owner: ${owner}
        </p>
        <p class="project-telephone">
          Year: ${commissioned}
        </p>
      </div>
    </div>
    `);
}

// ALTRENATIVE POPUP CARD STYLED WITH FRAME-MOTION PACKAGE

{
  /* 
  import { motion } from "framer-motion";
  
  <motion.div
className="absolute bottom-6 left-0 right-0 mx-auto my-0 w-80"
initial={{ scale: 0 }}
animate={{ scale: 1 }}
exit={{ scale: 0 }}
>
<div className="flex gap-2 p-2 rounded-lg shadow-xl bg-zinc-800 text-white">
  <div className="w-28">
    <p>
      <img src={imgUrl} alt={`Cat for ${name}`} className="rounded" />
    </p>
  </div>
  <div className="grow">
    <h1 className="font-bold">
      {url && (
        <a
          href={url}
          className="text-sky-400"
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      )}
      {!url && name}
    </h1>
    <p className="text-sm">{address}</p>
    <div className="flex items-center gap-1 text-sm text-amber-400">
      {/* {Array.from({ length: Math.trunc(stars) }).map((_, i) => (
        <ImStarFull key={i} />
      ))}
      {stars !== Math.trunc(stars) && <ImStarHalf />} 
      <span className="text-white">{stars}</span>
    </div>
  </div>
</div>
</motion.div> */
}
