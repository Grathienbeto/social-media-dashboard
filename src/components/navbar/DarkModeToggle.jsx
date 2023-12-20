import PropType from "prop-types";

export const DarkModeToggle = ({ handleChangeTheme }) => {
  return (
    <div className="flex justify-between pt-4">
      <p className="font-bold text-lm_darkGrayBlue text-sm">Dark Mode</p>
      <button className="" onClick={handleChangeTheme}>
        THEME_BTN
      </button>
    </div>
  );
};

DarkModeToggle.propTypes = {
  handleChangeTheme: PropType.func,
};
