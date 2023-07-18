export interface ProjectDataProps {
  thumbnail: string;
  title: string;
  tech: string;
  content: string;
  repo?: string;
  site?: string;
}

export const projectsData: ProjectDataProps[] = [
  {
    thumbnail: "/images/waveform-prototype.png",
    title: "Waveform Editor",
    tech: "React-Peaks.js-ChakraUI",
    content:
      "This waveform editor displays an audio clip in two waveforms, an overview of the entire media and a zoom view of a selected section of the media.The waveform is presented either pre-populated with clips/segments or displayed with no clips/segments.<br> A user can add more clips/segments to the timeline whether it is pre-populated or empty. All clips can be edited, deleted or created once the user is ready and the clip information is dynamically displayed in a list below the waveform.<br>A variety of error checking logic has been implemented including non-zero length clips, clips no being able to overlap and clips requiring a filename before being able to be created.",
    repo: "https://github.com/MarioLisbona/CA-T3A2-B-travelers-forum-client",
    site: "https://travellersforum.netlify.app/",
  },
  {
    thumbnail: "/images/travellers-forum-front-end.png",
    title: "Traveller's Forum",
    tech: "MongoDB-Express-React-NodeJs",
    content:
      "This project was developed with the MERN stack and uses various third party libraries to implement CRUD functionality and authentication. Traveller's Forum allows guests to browse all stories posted on the forum. Users can register to become a member and post stories to different categories, delete and edit their own stories and rate stories posted by other users.",
    repo: "https://github.com/MarioLisbona/CA-T3A2-B-travelers-forum-client",
    site: "https://travellersforum.netlify.app/",
  },
  {
    thumbnail: "/images/forum-api.png",
    title: "Forum",
    tech: "Python-Flask-Postgres",
    content:
      "This API web server was built with Python, Flask and PostgreSQL. It gives the users access to full CRUD operations on the data stored in the database. Users are authenticated with JWT tokens after they have successfully registered to the platform. Registered users can make posts to a variety of channels in the forum, reply to posts and delete their own posts and replies. Users with administration rights can delete any post or reply, issue warnings to users and delete users from the forum. There is also an endpoint to display forum statistics.",
    repo: "https://github.com/MarioLisbona/CA-T2A2-API-Webserver",
  },
  {
    thumbnail: "/images/contacts-app.png",
    title: "Contacts App",
    tech: "Python-bash",
    content:
      "This is a contacts book Terminal Application written in Python. I've used the Rich Python library to create the interface and used TinyDB, a document-orientated database library to allow for persistent storage and retrieval of data entered into the application..",
    repo: "https://github.com/MarioLisbona/CA-T1A3-terminal-app",
  },
  {
    thumbnail: "/images/etch-a-sketch.png",
    title: "Etch-a-sketch",
    tech: "HTML-CSS-JavaScript",
    content:
      "This was one of the first projects I attempted in HTML, CSS and Javascript. I started it while I was stuck at home for two weeks with COVID-19. I found it really challenging and it took me quite some time but I learnt a lot. <br>The app simulates a physical etch-a-sketch. The user can choose the pen colour and background colour or have a colour chosen randomly. They can also choose the resolution of the board and reset the board to draw another picture.",
    repo: "https://github.com/MarioLisbona/etch-a-sketch",
    site: "https://mariolisbona.github.io/etch-a-sketch/",
  },
];
