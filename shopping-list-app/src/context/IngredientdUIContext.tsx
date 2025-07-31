import React, { createContext, useContext, useState, ReactNode } from "react";

type IngredientsUIContextType = {
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  selectedItemId: string | null;
  setSelectedItemId: (id: string | null) => void;
};

const IngredientsUIContext = createContext<IngredientsUIContextType | undefined>(undefined);

export const IngredientsUIProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  return <IngredientsUIContext.Provider value={{ selectedCategory, setSelectedCategory, selectedItemId, setSelectedItemId }}>{children}</IngredientsUIContext.Provider>;
};

export const useIngredientsUI = (): IngredientsUIContextType => {
  const context = useContext(IngredientsUIContext);
  if (!context) throw new Error("useIngredientsUI must be used within IngredientsUIProvider");
  return context;
};
