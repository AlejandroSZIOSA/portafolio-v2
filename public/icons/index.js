//create a name to the imports and exports of the icons, so we can import them in a more organized way in the components that need them, instead of importing each icon separately from its path. This also allows us to change the path of the icons in one place if needed, without having to change it in every component that uses them.
import ramOrangeBlack from "../icons/git-ram/orange-black.svg";
import ramOrangeLightBlack from "../icons/git-ram/orange-light-black.svg";
import ramWhiteBlue from "../icons/git-ram/white-blue.svg";

import catBlueIcon from "../icons/git-cat/git-cat-blue.svg";
import catOrangeIcon from "../icons/git-cat/git-cat-orange.svg";

import sweFlag from "../icons/flags/swe.png";
import engFlag from "../icons/flags/en.png";
import espFlag from "../icons/flags/es.png";

export const GIT_ICONS = {
  catBlueIcon,
  catOrangeIcon,
  ramOrangeBlack,
  ramOrangeLightBlack,
  ramWhiteBlue,
};

export const FLAGS = {
  sweFlag,
  engFlag,
  espFlag,
};
