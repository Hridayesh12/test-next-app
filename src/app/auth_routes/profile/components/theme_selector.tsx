"use client";
import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react"; // Ensure DaisyUI styles are imported

// List of available DaisyUI themes
const themes = [
  { name: "Light", themeClass: "light" },
  { name: "Dark", themeClass: "dark" },
  { name: "Bumblebee", themeClass: "bumblebee" },
  { name: "Cupcake", themeClass: "cupcake" },
  { name: "Retro", themeClass: "retro" },
  { name: "Lofi", themeClass: "lofi" },
  { name: "Pastel", themeClass: "pastel" },
  { name: "Forest", themeClass: "forest" },
  { name: "Dracula", themeClass: "dracula" },
  { name: "Emerald", themeClass: "emerald" },
  { name: "Corporate", themeClass: "corporate" },
  { name: "Synthwave", themeClass: "synthwave" },
  { name: "Cyberpunk", themeClass: "cyberpunk" },
  { name: "Valentine", themeClass: "valentine" },
  { name: "Halloween", themeClass: "halloween" },
  { name: "Garden", themeClass: "garden" },
  { name: "Aqua", themeClass: "aqua" },
  { name: "Fantasy", themeClass: "fantasy" },
  { name: "Wireframe", themeClass: "wireframe" },
  { name: "Black", themeClass: "black" },
  { name: "Luxury", themeClass: "luxury" },
  { name: "CMYK", themeClass: "cmyk" },
  { name: "Autumn", themeClass: "autumn" },
  { name: "Business", themeClass: "business" },
  { name: "Acid", themeClass: "acid" },
  { name: "Lemonade", themeClass: "lemonade" },
  { name: "Night", themeClass: "night" },
  { name: "Coffee", themeClass: "coffee" },
  { name: "Winter", themeClass: "winter" },
  { name: "Dim", themeClass: "dim" },
  { name: "Nord", themeClass: "nord" },
  { name: "Sunset", themeClass: "sunset" },
];
const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-4 mt-2">
      <h1 className="text-xl font-bold">Select Theme</h1>
      <div className="flex mx-6 gap-3 w-[97vw] overflow-x-scroll">
        {themes.map((th, index) => (
          <div
            key={th.name}
            className={`w-32 h-28 mb-1 flex flex-col items-center justify-between rounded-lg cursor-pointer`}
            onClick={() => {
              setTheme(th);
            }}
          >
            <div
              className={`h-20 w-full flex-grow-1 rounded-lg border-2 ${
                th.themeClass
              }  p-2 flex flex-col items-center justify-center gap-1 ${
                theme.name === th.name ? "border-primary" : "border-transparent"
              }`}
              data-theme={th.themeClass}
            >
              <p className="text-center text text-primary text-sm tex-center">
                {th.name}
              </p>
              <div className="flex items-end justify-center gap-1">
                <div className="w-6 h-4 bg-primary right-1 bottom-1 rounded-sm"></div>
                <div className="w-6 h-4 bg-secondary right-2 bottom-2 rounded-sm"></div>
                <div className="w-6 h-4 bg-neutral right-2 bottom-2 rounded-sm"></div>
                <div className="w-6 h-4 bg-info right-2 bottom-2 rounded-sm"></div>
              </div>
            </div>
            {theme.name === th.name && (
              <div
                data-theme={theme.themeClass}
                className={`w-0 h-0 bg-transparent border-l-[9px] border-l-transparent border-b-[12px] border-b-primary border-r-[9px] border-r-transparent`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
