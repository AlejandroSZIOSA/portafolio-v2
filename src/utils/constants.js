export const CONSTANTS = {
  USE_MEDIA_MAX_WIDTH: "(max-width: 765px)", //global mobile breakpoint for useMedia library
  CURRENT_UPDATED_DATE: "June 19, 2026",
  BASE_CONTENT_URL: "https://res.cloudinary.com/dl8fppp0t/image/upload",
};

export const MESSAGES_DATA = {
  //fix:saving a fragment inside an object :)
  meOnMobile: {
    content: (
      <>
        Hi! 😎 <br />
        My name is <strong id="intro_text_strong">Gabriel Alejandro</strong>
        <br />I am an action oriented, highly focused and very curious{" "}
        <strong>Frontend Developer Junior.</strong>
      </>
    ),
  },
  meOnDesktop: {
    content: (
      <>
        Hi!😎, <br></br>My name is
        <strong id="intro_text_strong"> Gabriel Alejandro.</strong> I am an
        action oriented, highly focused and very curious Frontend Developer
        Junior.
      </>
    ),
  },
  myCurrentFocus: {
    title: "My Current Focus",
    subtitle: "React + CMS + A.I Assistance",
    content: `“Functionality”,"Architecture",“Good practices”`,
  },
  myHobbies: {
    title: "My Hobbies",
    content: `“It-support”,“Training”,”International Checkers”,”Ukelele”`,
  },
  myWish: {
    title: "My Wish",
    content: `”Create, maintain and publish fullstack Javascript solutions”`,
  },
};
