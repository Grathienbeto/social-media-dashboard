import PropType from "prop-types";

export const Card = (props) => {
  const { followers, variance, svg, profile, subs, border } = props;
  return (
    <div
      id="card"
      className={`text-center md:flex-wrap rounded-lg bg-lm_grayBlue dark:bg-dm_darkDesaturaedBlue p-7 border-t-4 ${border}`}
    >
      <div className="flex gap-2 justify-center">
        <img src={svg} />
        <p className="text-sm text-lm_darkGrayBlue dark:text-dm_desaturatedBlue">
          {profile}
        </p>
      </div>
      <div className="mt-6">
        <p className="text-6xl font-bold text-lm_darkBlue dark:text-dm_white">
          {followers}
        </p>
        <p className="text-lm_darkGrayBlue tracking-widest pt-2 text-sm dark:text-dm_desaturatedBlue">
          {subs}
        </p>
      </div>
      <div>
        {variance > 0 ? (
          <div className="flex items-center justify-center gap-1 mt-5">
            <img
              src="https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-up.svg"
              alt=""
            />
            <p className="text-limeGreen text-xs font-bold">
              {" "}
              {variance} Today
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-1 mt-5">
            <img
              src="https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-down.svg"
              alt=""
            />
            <p className="text-brightRed text-xs font-bold">
              {" "}
              {variance * -1} Today
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  followers: PropType.string,
  variance: PropType.number,
  profile: PropType.string,
  svg: PropType.string,
  subs: PropType.string,
  border: PropType.string,
};
