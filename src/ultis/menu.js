import icons from "./icons";

const { MdOutlineLibraryMusic, MdOutlineFeed, HiOutlineChartPie, TbChartArcs } = icons;

export const sideBarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icon: <MdOutlineLibraryMusic size={22} />,
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icon: <TbChartArcs size={22} />,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icon: <HiOutlineChartPie size={22} />,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icon: <MdOutlineFeed size={22} />,
  },
];
