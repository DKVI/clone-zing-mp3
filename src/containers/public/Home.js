import { Header, Slider } from "../../components";
import * as apis from "../../apis";
import { useEffect } from "react";
export default function Home() {
  return (
    <div className="overflow-y-auto">
      <div className="h-[70px]  px-[50px] flex items-center">
        <Header />
      </div>
      <Slider />
    </div>
  );
}
