/* eslint-disable @next/next/no-img-element */
import SearchBox from "./SearchBox";

// VIDEO path is embedded in CSS className="home-nine". For formatting video, use following ffmpeg command:
// ffmpeg -i video.mp4 -ss 6 -c:v libx264 -crf 18 -preset veryslow -c:a copy -t 6 -s 1920x960 video1-1920x960.mp4

const Hero = () => {
  return (
    <section className="media-background">
      {/* <video autoplay muted loop id="home-video">
        <source src="/assets/videos/video2-1920x960.mp4" type="video/mp4" />
        <source src="/assets/videos/video1-1920x960.mp4" type="video/mp4" />
        <img
          src="/assets/images/generators/american-public-power-association-XGAZzyLzn18-unsplash.jpg"
          alt="power plant"
        ></img>
      </video> */}

      <div className="container">
        <div className="row posr">
          <div className="col-lg-8 offset-lg-2">
            <div className="home_content home7">
              <div className="home-text text-center">
                <h2 className="fz55">Discover your place to live</h2>
                <p className="fz18 color-white">Get started in few clicks.</p>
              </div>
              {/* End .home-text */}

              <div className="home_adv_srch_opt home9">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
