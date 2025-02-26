"use client"; // This is required since we're using React hooks and event handlers

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("section1");

  const showSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => showSection("section1")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeSection === "section1" ? "#0070f3" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Section 1
        </button>
        <button
          onClick={() => showSection("section2")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeSection === "section2" ? "#0070f3" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Section 2
        </button>
      </div>

      {/* Sections */}
      <div>
        {activeSection === "section1" && (
          <div
            id="section1"
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "5px",
            }}
          >
            <h2>Section 1</h2>
            <p>This is the content of Section 1.</p>
          </div>
        )}

        {activeSection === "section2" && (
          <div
            id="section2"
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "5px",
            }}
          >
            <h2>Section 2</h2>
            <p>This is the content of Section 2.</p>
          </div>
        )}
      </div>
    </div>
  );
}
