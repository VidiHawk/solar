export default function MapCard(data) {
  const coordinates = data.data[0] ? data.data[0][1][0] : undefined;
  const capacity = data.data[0] ? data.data[0][1][1]["capacity"] : undefined;
  const fuel = data.data[0] ? data.data[0][1][1]["fuel"] : undefined;
  const name = data.data[0] ? data.data[0][1][1]["name"] : undefined;
  const owner = data.data[0] ? data.data[0][1][1]["owner"] : undefined;
  const commissioned = data.data[0]
    ? data.data[0][1][1]["commissioned"]
    : undefined;
  const image = data.data[0] ? data.data[0][1][1]["image"] : undefined;

  // console.log(data.data[0]);

  return (
    <div class="project-wrap">
      <div class="project-content">
        <div class="project-img">
          <img src={image} />
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
