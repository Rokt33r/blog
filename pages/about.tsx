import React from 'react'
import DefaultTemplate from '../templates/DefaultTemplate'

const AboutPage = () => (
  <DefaultTemplate>
    <h1>About me</h1>
    <h2>Intro</h2>
    <p>
      I'm Junyoung Choi, a developer located in Busan(Gimhae) and Tokyo, and
      also working as CTO of BoostIO and CEO of Manotech. I mainly develop web
      applications with Typescript. I also contribute to several OSS projects
    </p>

    <h2>Languages</h2>
    <ul>
      <li>🇰🇷Korean : Native. I've been practicing Korean for 30 years.</li>
      <li>
        🇯🇵Japanese : Quite fluent. I've been staying in Japan off and on since
        2012.
      </li>
      <li>
        🇺🇸English(US) : Broken. But I'm using it every day with my girlfriend,
        an American from VA, and co-workers. So don't hesitate to contact to me
        in English!
      </li>
    </ul>

    <h2>Hobbies</h2>
    <ul>
      <li>
        Playing video games. I've been playing Apex Legends a lot recently.
      </li>
      <li>
        Listening to random playlists from Apple music. Any genre and any era is
        OK with me. I listen to everything from Rachmaninoff to Machine Gun
        Kelly. Try me!
      </li>
    </ul>

    <h2>Stacks</h2>
    <ul>
      <li>
        <strong>Typescript</strong>
      </li>
      <li>
        <strong>Node.js</strong>
      </li>
      <li>
        <strong>React.js</strong>
      </li>
      <li>AWS</li>
      <li>Now.sh</li>
      <li>MongoDB</li>
      <li>PostgreSQL</li>
      <li>CouchDB</li>
      <li>Markdown plugins</li>
    </ul>

    <h2>History</h2>
    <ul>
      <li>Boostnote developer/maintainer (2015-2016, 2019.7-now)</li>
      <li>CEO of Mano Technology Co., Ltd. (2018.2-now)</li>
      <li>CTO of BoostIO (2018.1-now)</li>
      <li>Launch Enginner of Revisolution (2017.4-2017.12)</li>
      <li>
        Undergraduate student of Kyushu University (Majored in Aerospace
        Engineering) (2012.4-2017.3)
      </li>
    </ul>

    <h2>Current Projects</h2>
    <ul>
      <li>
        [Boostnote](https://github.com/BoostIO/Boostnote)(Project owner) : Note
        app for developers.
      </li>
      <li>
        [Prismy](https://github.com/prismyland)(Project owner) : Simple server
        library written in Typescript.
      </li>
      <li>
        [Remark.js](https://github.com/remarkjs/remark)(Contributor) : Markdown
        processor library.
      </li>
    </ul>
  </DefaultTemplate>
)

export default AboutPage
