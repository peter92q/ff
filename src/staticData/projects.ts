import { one, hive, trader, traderlogo, clother, clotherlogo } from "../assets";


export const projects = [
  {
    name: "Trader",
    image: trader,
    description:  "Crypto trading platform",
    features: [
      "Live financial data fetched from Coingecko API",
      "Serialization of data and structuring response objects that are compatible with Highcharts API",
      "Professional chart with real data(1d,7d,30d,1y) designed in Highcharts API",
      "Portfolio pie chart with breakdown of current investments",
      "Price change trackers",
      "Accounts have virtual balance that can be used for opening positions",
      "Opened positions change based on real-time market stats",
      "Close positions and redeem profits that are sent straight to your balance",
      "Closing -% positions reflects negatively on balance",
      "Equity calculator which sums the entirety of your potential net-worth",
      `Lists of active/opened and closed positions`,
      "Investment leveraging: x5, x25, x50, for enhancing potential gains/losses",
      "Positions with losses exceeding investment amount are automatically closed at -100%",
    ], 
    logo: traderlogo,
    link: "https://app.peter92q.com:30004",
    stack: {
      frontend: `Vite, React, Typescript, Highcharts, Axios, Redux Toolkit, Tailwind CSS, 
                 Material UI`,
      backend: ".NET Core, C#, ASP.Net Core, Entity Framework, Identity Core, Coingecko API",
      deployment: "Apache http server + reverse proxy"
    },
    git: "https://github.com/peter92q/trader/tree/main"
  },
  {
    name: "Hive Network",
    image: one,
    description:  "Social media platform",
    features: [
      "Dynamic updates, changes are reflected immediately without page re-rendering or additional async calls",
      "Account creation and login persistance with JWT and cookies",
      "Interactive personal profile page",
      "Searchbar for finding users",
      "Edit profile details and image",
      "Create and delete posts",
      "Like / unlike posts",
      "Comment on posts and delete comments",
      `Follow / Unfollow users + comprehensive lists of Followers/Following for each individual user`,
      "Fully functional inbox. Message users, delete conversations, restore conversations",
      "New message notifications",
      "Infinite scroll/pagination effect",
    ],
    logo: hive,
    link: "https://app.peter92q.com:30002",
    stack: {
      frontend: `Vite, React, Typescript, Axios, Redux Toolkit, Tailwind CSS, 
                 Material UI, React Spinners`,
      backend: ".NET Core, C#, ASP.Net Core, Entity Framework, Identity Core, AWS S3, AWS RDS",
      deployment: "Apache http server + reverse proxy"
    },
    git: "https://github.com/peter92q/hive"
  },
  {
    name: "Clother",
    image: clother,
    description:  "Online shopping platform",
    features: [
      "Customer profiles",
      "Dynamic basket updates with no re-rendering or additional async calls",
      "Anonymous basket which merges with the user basket when the user logs in/creates an account",
      "User baskets are stored on the server side for persistence and marketing purposes",
      "Send order",
      "Previous orders list for every profile",
      "Pagination and sorting, filtering, search",
      "Individual product pages",
    ],
    logo: clotherlogo,
    link: "https://app.peter92q.com:30000",
    stack: {
      frontend: `Vite, React, Typescript, Axios, Redux Toolkit, Tailwind CSS, 
                 Material UI, React Spinners`,
      backend: ".NET Core, C#, ASP.Net Core, Entity Framework, Identity Core",
      deployment: "Apache http server + reverse proxy"
    },
    git: "https://github.com/peter92q/clother"
  }
] 