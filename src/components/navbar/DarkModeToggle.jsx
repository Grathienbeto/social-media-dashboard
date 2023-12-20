import PropType from "prop-types";

export const DarkModeToggle = ({ handleChangeTheme }) => {
  return (
    <div className="flex justify-between align-middle pt-4 gap-2 items-baseline">
      <p className="font-bold text-lm_toggle dark:text-dm_desaturatedBlue text-sm">
        Dark Mode
      </p>
      <button
        className="text-lm_darkBlue dark:text-dm_white"
        onClick={handleChangeTheme}
      >
        THEME_BTN
      </button>
    </div>
  );
};

DarkModeToggle.propTypes = {
  handleChangeTheme: PropType.func,
};
