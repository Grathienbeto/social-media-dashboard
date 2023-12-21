import PropType from "prop-types";

export const OverviewCard = (props) => {
  const { interactions, brand, amount, variance } = props;

  return (
    <div className="p-6 dark:bg-dm_darkDesaturaedBlue bg-lm_grayBlue rounded-lg ">
      <div className="flex justify-between">
        <p className="dark:text-dm_desaturatedBlue text-lm_darkGrayBlue text-sm font-bold">
          {interactions}
        </p>
        <img src={brand} alt="" />
      </div>
      <div className="flex justify-between items-baseline mt-5">
        <p className="dark:text-dm_white text-4xl font-bold">{amount}</p>
        {variance > 0 ? (
          <div className="flex items-center justify-center gap-1 mt-5">
            <img
              src="https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-up.svg"
              alt=""
            />
            <p className="text-limeGreen text-xs font-bold">{variance}%</p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-1 mt-5">
            <img
              src="https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-down.svg"
              alt=""
            />
            <p className="text-brightRed text-xs font-bold">{variance * -1}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

OverviewCard.propTypes = {
  variance: PropType.number,
  interactions: PropType.string,
  brand: PropType.string,
  amount: PropType.string,
};
