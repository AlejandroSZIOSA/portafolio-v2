export const CONSTANTS = {
  USE_MEDIA_MAX_WIDTH: "(max-width: 1024px)", //global mobile breakpoint for useMedia library
  CURRENT_UPDATED_DATE: "September 14, 2026",
  BASE_CONTENT_URL: "https://res.cloudinary.com/dl8fppp0t/image/upload",
};

export const MESSAGES_DATA = {
  //fix:saving a fragment inside an object :)
  meOnMobile: {
    content: (
      <>
        Hi!😎 <br />
        My name is <strong id="intro_text_strong">Gabriel Alejandro.</strong>
        <br />I am an action oriented, highly focused and curious{" "}
        <strong>Frontend Developer.</strong>
      </>
    ),
  },
  meOnDesktop: {
    content: (
      <>
        Hi!😎, <br></br>My name is
        <strong id="intro_text_strong"> Gabriel Alejandro.</strong> I am an
        action oriented, highly focused and curious{" "}
        <strong>Frontend Developer.</strong>
      </>
    ),
  },
  myCurrentFocus: {
    title: "My Current Focus",
    subtitle: "Node.js(Ts), PostgreSQL, Copilot Assistance",
    content: `“Functionality”,"Architecture","Good practices" & “Good prompts”`,
  },
  myHobbies: {
    title: "My Hobbies",
    content: `“It-support”,“Training”,”International Checkers”,”Ukelele”`,
  },
  myWish: {
    title: "My Wish",
    content: `”Create, Maintain and Deploy fullstack TypeScript solutions”`,
  },
};
