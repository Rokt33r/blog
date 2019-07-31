import React from 'react'
import DefaultTemplate from '../templates/DefaultTemplate'
import Link from '../atoms/Link'

const AboutPage = () => (
  <DefaultTemplate>
    <h1>👨‍🚀 About me</h1>
    <figure>
      <img src='/static/me-and-my-gf.jpg' width='100%' />
      <figcaption>Me and my GF</figcaption>
    </figure>

    <h2>🏁 Intro</h2>
    <p>
      I'm Junyoung Choi, a developer located in Busan(Gimhae) and Tokyo, and
      also working as CTO of BoostIO and CEO of Manotech. I mainly develop web
      applications with Typescript. I also contribute to several OSS projects.
    </p>

    <ul>
      <li>
        <Link href='https://github.com/rokt33r' newTab>
          Github
        </Link>
      </li>
      <li>
        <Link href='https://twitter.com/rokt33r' newTab>
          Twitter
        </Link>
      </li>
      <li>
        <Link href='https://spectrum.chat/users/rokt33r' newTab>
          Spectrum
        </Link>
      </li>
    </ul>

    <h2>🗣️ Languages</h2>
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

    <h2>🔫 Hobbies</h2>
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

    <h2>🏗️ Stacks</h2>
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
      <li>Electron</li>
      <li>AWS</li>
      <li>Now.sh</li>
      <li>MongoDB</li>
      <li>PostgreSQL</li>
      <li>CouchDB</li>
      <li>Markdown plugins</li>
    </ul>

    <h2>⏳ History</h2>
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

    <h2>🏃 Current Projects</h2>
    <ul>
      <li>
        <Link href='https://github.com/BoostIO/Boostnote' newTab>
          Boostnote
        </Link>{' '}
        (Project owner) : Note app for developers.
      </li>
      <li>
        <Link href='https://github.com/prismyland' newTab>
          Prismy
        </Link>{' '}
        (Project owner) : Simple server library written in Typescript.
      </li>
      <li>
        <Link href='https://github.com/remarkjs/remark' newTab>
          Remark.js
        </Link>{' '}
        (Contributor) : Markdown processor library.
      </li>
    </ul>

    <h2>❄️ Frozen Projects</h2>
    <ul>
      <li>
        <Link href='https://github.com/BoostIO/tachijs' newTab>
          Tachijs
        </Link>{' '}
        (Project owner) : Highly testable dead simple web server written in
        Typescript 🚀
      </li>
    </ul>

    <h2>🎙️ Media</h2>
    <ul>
      <li>
        <Link
          href='https://opensource.tokyo/n/na301c1932f54?magazine_key=m176b7596d140'
          newTab
        >
          日本には「企業主導のオープンソース推進」が必要だ。世界10ヶ国に開発拠点を構えるLINEのOSS支援体制
          - 2019.07.23
        </Link>
      </li>
      <li>
        <Link href='https://type.jp/et/feature/9888' newTab>
          『IssueHunt』によってエンジニアの未来はどう変わる？
          オープンソースの新たな可能性に迫る - 2019.02.22
        </Link>
      </li>
    </ul>
  </DefaultTemplate>
)

export default AboutPage
