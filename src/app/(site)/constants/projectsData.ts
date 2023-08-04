export interface ProjectDataProps {
  thumbnail: string;
  title: string;
  tech: string;
  intro: string;
  content: string;
  repo?: string;
  site?: string;
}

export const projectsData: ProjectDataProps[] = [
  {
    thumbnail: "/images/waveform-prototype.png",
    title: "Waveform Editor",
    tech: "React-Peaks.js-ChakraUI",
    intro:
      "A Desktop UI to create, delete and edit media clips timings on a waveform window",
    content:
      "I built this desktop waveform editor using React and a third party library called Peaks.js. Styling was achieved using Chakra UI.<br><br>The waveform editor displays an audio clip in two waveforms, an overview of the entire media and a zoom view of a selected section of the media. The waveform is presented either pre-populated with clips/segments or displayed with no clips/segments.<br><br> A user can add more clips/segments to the timeline whether it is pre-populated or empty. All clips can be edited, deleted or created once the user is ready and the clip information is dynamically displayed in a list below the waveform.<br><br>A variety of error checking logic has been implemented including non-zero length clips, clips not being able to overlap and clips requiring a filename before saving.",
    repo: "https://github.com/MarioLisbona/waveform-react-proto",
    site: "https://clinquant-valkyrie-3208c8.netlify.app/",
  },
  {
    thumbnail: "/images/travellers-forum-front-end.png",
    title: "Traveller's Forum",
    tech: "MongoDB-Express-React-NodeJs",
    intro: "A MERN stack project for users to read and post to a travel form",
    content:
      "This project was built, in partnership with another student, for our final assessment at <a href='https://coderacademy.edu.au/'>Coder Academy.</a><br><br>I developed the client in React.<br><br>We used the MERN stack and various third party libraries to implement CRUD functionality and authentication.<br><br>Traveller's Forum allows guests to browse all stories posted on the forum. Users can register to become a member and post stories to different categories, delete and edit their own stories and rate stories posted by other users.",
    repo: "https://github.com/MarioLisbona/CA-T3A2-B-travelers-forum-client",
    site: "https://travellersforum.netlify.app/",
  },
  {
    thumbnail: "/images/forum-api.png",
    title: "Forum",
    tech: "Python-Flask-Postgres",
    intro:
      "A Python Webserver for a Forum API with authentication and CRUD functionality",
    content:
      "I designed and built this API web server that was developed with Python, Flask and PostgreSQL.<br><br>It gives the users access to full CRUD operations on the data stored in the database.<br><br>Users are authenticated with JWT tokens after they have successfully registered to the platform. Registered users can make posts to a variety of channels in the forum, reply to posts and delete their own posts and replies.<br><br>Users with administration rights can delete any post or reply, issue warnings to users and delete users from the forum. There is also an endpoint to display forum statistics.",
    repo: "https://github.com/MarioLisbona/CA-T2A2-API-Webserver",
  },
  {
    thumbnail: "/images/contacts-app.png",
    title: "Contacts App",
    tech: "Python-bash",
    intro: "A Python Terminal application to store contact details",
    content:
      "I built this contacts book Terminal Application in Python. I used the Rich Python library to create the interface and used TinyDB, a document-orientated database library to allow for persistent storage and retrieval of data entered into the application.",
    repo: "https://github.com/MarioLisbona/CA-T1A3-terminal-app",
  },
  {
    thumbnail: "/images/etch-a-sketch.png",
    title: "Etch-a-sketch",
    tech: "HTML-CSS-JavaScript",
    intro: "A virtual etch-a-sketch drawing application",
    content:
      "This was one of the first projects I attempted in HTML, CSS and Javascript. I started it while I was stuck at home for two weeks with COVID-19.<br><br>I found it really challenging and it took me quite some time but I learnt a lot. The app simulates a physical etch-a-sketch.<br><br>The user can choose the pen colour and background colour or have a colour chosen randomly. They can also choose the resolution of the board and reset the board to draw another picture.",
    repo: "https://github.com/MarioLisbona/etch-a-sketch",
    site: "https://mariolisbona.github.io/etch-a-sketch/",
  },
];
