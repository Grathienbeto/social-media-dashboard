import PropType from "prop-types";

export const DarkModeToggle = ({ handleChangeTheme }) => {
  return (
    <div className="pt-4 flex justify-between items-center md:gap-3">
      <p className="font-bold text-lm_toggle dark:text-dm_desaturatedBlue text-sm">
        Dark Mode
      </p>
      <button
        id="btn"
        className="bg-lm_toggle w-14 h-7 rounded-full flex items-center p-1 justify-end 
        dark:bg-gradient-to-r from-dm_toggleLin1 to-dm_toggleLin2 dark:justify-start"
        onClick={handleChangeTheme}
      >
        <div className="w-5 h-5 rounded-full bg-lm_white dark:bg-dm_darkBlueBg"></div>
      </button>
    </div>
  );
};

DarkModeToggle.propTypes = {
  handleChangeTheme: PropType.func,
};
