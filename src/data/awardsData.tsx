interface Award {
  title: string;
  image: string;
  awards: any;
  devpostUrl: string;
}

export const awardsData: Award[] = [
  {
    title: 'PennApps XXII - SpotZoo',
    image: 'spotzoo.gif',
    awards: (
      <b>
        <span style={{ fontSize: '18px' }}>
          University of Pennsylvania
          <br />
          <br />
          · Top 9
          <br />· Best Use of IPFS
        </span>
      </b>
    ),
    devpostUrl: 'https://devpost.com/software/spotzoo',
  },
  {
    title: 'MakeUC - Recaipe',
    image: 'recaipe.gif',
    awards: (
      <b>
        <span style={{ fontSize: '18px' }}>
          University of Cincinnati
          <br />
          <br />
          · Best Hack for Demystifying Food Exp
          <br />· Best Use of Blockchain - 2nd
        </span>
      </b>
    ),
    devpostUrl: 'https://devpost.com/software/recaipe',
  },
  {
    title: 'Programming Contest',
    image: 'CCSC.png',
    awards: (
      <b>
        <span style={{ fontSize: '18px' }}>
          CCSC:MW
          <br />
          <br />· 2nd Place
        </span>
      </b>
    ),
    devpostUrl: 'https://devpost.com/software/recaipe',
  },

  {
    title: 'DivHacks - SafeLynk',
    image: 'safelynk.gif',
    awards: (
      <b>
        <span style={{ fontSize: '18px' }}>Columbia University</span>
        <br />
        <br />
        <span style={{ fontSize: '18px' }}>· Most Fun or Unique Hack</span>
      </b>
    ),
    devpostUrl: 'https://devpost.com/software/safelynk',
  },
  {
    title: 'Backyard Hacks - Social Curator',
    image: 'social-curator.gif',
    awards: (
      <b>
        <span style={{ fontSize: '18px' }}>Major League Hacking</span>
        <br />
        <br />
        <span style={{ fontSize: '18px' }}>· Best Use of Google Cloud</span>
      </b>
    ),
    devpostUrl: 'https://devpost.com/software/socialcurator',
  },
  {
    title: 'Data Science Hackathon',
    image: 'DShack.png',
    awards: (
      <b>
        <span style={{ fontSize: '18px' }}>
          Saint Mary's College
          <br />
          <br />· 3rd Place
        </span>
      </b>
    ),
    devpostUrl: 'https://devpost.com/software/recaipe',
  },
];
