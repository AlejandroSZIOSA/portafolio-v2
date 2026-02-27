//create a name to the imports , in icons is convenient
import ramOrangeIcon from "../icons/git-ram/git-ram-orange.svg";
import ramBlueIcon from "../icons/git-ram/git-ram-blue.svg";
import catBlueIcon from "../icons/git-cat/git-cat-blue.svg";
import catOrangeIcon from "../icons/git-cat/git-cat-orange.svg";

//create a const, then import as destructuring
export const gitIcons = {
  orange: [ramOrangeIcon, catOrangeIcon],
  blue: [ramBlueIcon, catBlueIcon],
};
