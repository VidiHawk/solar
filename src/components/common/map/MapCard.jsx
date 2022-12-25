export default function MapCard(data) {
  // console.log(JSON.stringify(data, null, 2));

  const coordinates = data ? data.data[0][1][0] : undefined;
  // const [capacity, fuel, name, owner, commissioned, image] = data["data"][0][1];
  const capacity = data ? data.data[0][1][1]["capacity"] : undefined;
  const fuel = data ? data.data[0][1][1]["fuel"] : undefined;
  const name = data ? data.data[0][1][1]["name"] : undefined;
  const owner = data ? data.data[0][1][1]["owner"] : undefined;
  const commissioned = data ? data.data[0][1][1]["commissioned"] : undefined;
  const image = data ? data.data[0][1][1]["image"] : undefined;
  // console.log(data.data[0][1][1]["capacity"]);

  // {
  //   "data": [
  //     [
  //       [
  //         -6.090545654296875,
  //         55.86837652265993
  //       ],
  //       {
  //         "capacity": 2,
  //         "fuel": "Hydro",
  //         "name": "Inver Hydro",
  //         "owner": "Inver Hydro LLP",
  //         "commissioned": "unknown",
  //         "image": "assets/images/avatar/hydro.jpg"
  //       }
  //     ]
  //   ]
  // }

  return (
    <div class="project-wrap">
      <div class="project-content">
        <div class="project-img">
          <img src="" />
        </div>
        <h3 class="project-title">
          {capacity} MW {name}
        </h3>
        <p class="project-address">Owner: {owner}</p>
        <p class="project-telephone">Year: {commissioned}</p>
      </div>
    </div>
  );
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
