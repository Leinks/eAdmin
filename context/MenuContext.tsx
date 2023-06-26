"use client";
import { MenuProps } from "context-app";
import React from "react";
import { createContext, useState } from "react";

export const MenuContext = React.createContext<MenuProps>({} as MenuProps);

const MenuContextProvider = ({ children }: {children: React.ReactNode}) => {
   const [open, setOpen] = useState(false);

   const toggle = () => {
      console.log({ open });
      setOpen((prev) => !prev);
   };

   return <MenuContext.Provider value={{ open, toggle }}>{children}</MenuContext.Provider>;
};

export default MenuContextProvider;