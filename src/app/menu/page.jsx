"use client";

import { Button } from "@/components/ui/button";
import MyCard from "../../components/myCard";
import { useState } from "react";

const API_URL = "https://fakestoreapi.com/products"; // Local JSON file in the public folder
const API_URL2 = "/menudata.json"; // Local JSON file in the public folder
const limit = 10; // Change this to control the number of displayed cards

export default function Home() {
  const [activeSection, setActiveSection] = useState("section1");

  const showSection = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="p-4">
      <Button className="m-1 " onClick={() => showSection("section1")}>
        first
      </Button>
      <Button onClick={() => showSection("section2")}>second</Button>

      {activeSection === "section1" && (
        <div id="section1">
          <MyCard apiUrl={API_URL} limit={limit} />
        </div>
      )}

      {activeSection === "section2" && (
        <div id="section2">
          <MyCard apiUrl={API_URL2} limit={limit} />
        </div>
      )}
    </div>
  );
}
