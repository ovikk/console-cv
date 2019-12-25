import React from "react";
import Terminal from "./bash";
import styled from "styled-components";

const extensions = {
  ls: {
    exec: ({ structure, history, cwd }) => {
      return {
        structure,
        cwd,
        history: history.concat({
          value: "Hackers will be high-fived. ( ‘-’)人(ﾟ_ﾟ )(2)"
        })
      };
    }
  }
};

const history = [
  { value: "Ovik Khachikyan, Web Developer" },
  { value: "Age: 24" },
  { value: "Location: Helsinki" },
  { value: "Current Position: Senior Software Developer at Kyyti.com" },
  { value: "Type `help` to begin" }
];

const structure = {
  Education: {
    "LCME_2009-2012": {
      "Maths.info": {
        content: `Group Theory, Calculus, Linear Algebra, Mathematical Analysis`
      },
      "Information_Technology.info": {
        content: `Functional Programming: Haskell, Lambda calculus 
        Computer Science: Data Structures, Algorithms Analysis, Complexity Theory`
      },
      "about.txt": {
        content:
          "LCME - Laboratory Of Continious Mathematical Education\nLocation - St.Petersburg, Russia"
      }
    },
    "St.Petersburg_State_University_2012-2013": {
      "Maths.info": {
        content: `Geometry, Game Theory, Graph Theory`
      },
      "Information_Technology.info": {
        content: `C++, Java, Processor Architecture`
      },
      "about.txt": {
        content:
          "Studied Applyed Maths\nLocation - St.Petersburg, Russia"
      }
    },
    "Metropolia_2013-2017": {
      "Information_Technology.info": {
        content: `Mobile Development, Swift, Android Java
        Network Administration, CCNA
        Java, Java EE
        Game Development, Unity`
      },
      "about.txt": {
        content:
          "Metropolia University or Applyed Science\nStudied IT\nLocation - Helsinki, Finland"
      }
    }
  },
  Skills: {
    "Front_End.skills": {
      content: `JavaScript, TypeScript, React, jQuerry
      Redux, Flux, Apollo Client
      CSS, Styled-Components, Material-UI
      `
    },
    "Back_End.skills": {
      content: `NodeJS, Express
      GraphQL, Apollo Server
      PostgreSQL, MongoDB, Firebase
      Docker
      Little bit of AWS`
    },
    "Mobile.skills": {
      content: `React Native, Swift
      Apache Cordova, PhoneGap`
    },
    "Other.skills": {
      content: `Designing web apps / mobile apps
      Python, Django
      Scala, Play Framework
      Unity Game Engine`
    },
    "front_end_vs_back_end.meme": {
      content:
        "link to the meme: https://i.pinimg.com/564x/7d/ea/6e/7dea6e7c234b7fe0c910ec30c5a2b4c7.jpg"
    }
  },
  Experience: {
    "Portyr_2017.info": {
      content: `Postion: Junior Software Developer,
      Responsibilities: Create server-rendered web app using NextJs. Maintain already created React web app.
      Technologies: React, NextJs, Redux`
    },
    "Frank_Students_2018.info": {
      content: `Postion: Junior Software Developer,
      Responsibilities: Maintain React based web app. Create mobile app based on the web app using PhoneGap. Deploy production builds to the AWS.
      Technologies: React, Redux, PhoneGapp`
    },
    "Vainu_2018-2019.info": {
      content: `Postion: Software Developer,
      Responsibilities: Maintain and develop new features for the React based web app. Create or modify Django based servier API. Create standalone pojects for sales team and Tesla Finland.
      Technologies: React, Redux, Django, MongoDB`
    },
    "Kyyti_2019-2020.info": {
      content: `Postion: Senior Software Developer,
      Responsibilities: Maintain and develop new features for the Administration tools, both in front-end and backend. Guide and help junior developers. Help Mobile team with my assistance
      Technologies: React, Apollo, GraphQL, NodeJs, PostgreSQL, Kafka`
    },
    Pet_Projects: {
      "Automated_Garbage_Logistics.info": {
        content: `Automated garbage collection logistics in Yerevan, Armenia.`
      },
      "Pokemon_GO_script.info": {
        content: `Wrote a scripts to automatically change the location of the device and catch rare pokemons`
      },
      "Twitter_Clone.info": {
        content: `Clone of the Twitter. Done to learn more about GraphQL and Apollo Server/Client`
      },
      "Under.info": {
        content: `Unity 2D platformer Game`
      }
    }
  },
  "current_position.txt": {
    content: `Currently I'm working in Kyyti Group as a Senior Software Developer.    
    I'm responsible for the Administartion Tools both back-end and front-end parts`
  },
  "contact_links.txt": {
    content: `You can find me here
    E-mail: ovikdevil@gmail.com
    LinkedIn: https://www.linkedin.com/in/ovikh/
    GitHub: https://github.com/ovikk`
  },
  "README.md": {
    content: `✌⊂(✰‿✰)つ✌ Thanks for checking out my CV! ✌⊂(✰‿✰)つ✌
      There is a lot more that I can tell about myself, so if you want to discuss some cool opportunities or give a feedback, send me to my email address: ovikdevil@gmail.com.
      Best regards, 
      Ovik`
  },
  ".hidden": {
    ".secrets": { content: "Hackers will be high-fived. ( ‘-’)人(ﾟ_ﾟ )(3)" }
  }
};

function App() {
  return (
    <AppWrapper>
      <Title style={{ color: "white" }}>Console CV v3.0.1</Title>
      <TerminalWrapper>
        <Terminal
          history={history}
          structure={structure}
          extensions={extensions}
        />
      </TerminalWrapper>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  position: fixed;
  font-family: "Verdana";
  input:focus {
    outline: none;
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin: 15px 0px;
`;

const TerminalWrapper = styled.div`
  margin: 50px auto;
  width: 600px;
  height: 600px;
`;
