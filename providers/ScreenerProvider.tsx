"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { TStep1Data } from "@/app/screener/step1/page";
import { TStep2Data } from "@/app/screener/step2/page";

type TAllData = TStep1Data & TStep2Data;

interface IScreenerContext {
  step1Data: TStep1Data | undefined;
  step2Data: TStep2Data | undefined;
  setStep1Data: (data: TStep1Data | undefined) => void;
  setStep2Data: (data: TStep2Data | undefined) => void;
  allData: TAllData;
}

const ScreenerContext = createContext<IScreenerContext | undefined>(undefined);

export const useScreenerContext = () => {
  const context = useContext(ScreenerContext);
  if (!context) {
    throw new Error(
      "useScreenerContext must be used within a ScreenerProvider",
    );
  }
  return context;
};

export const ScreenerProvider = ({ children }: PropsWithChildren) => {
  const [step1Data, setStep1Data] = useState<TStep1Data | undefined>();
  const [step2Data, setStep2Data] = useState<TStep2Data | undefined>();

  const allData = {
    ...step1Data,
    ...step2Data,
  } as TAllData;

  const contextValue: IScreenerContext = {
    allData,
    step1Data,
    step2Data,
    setStep1Data,
    setStep2Data,
  };

  return (
    <ScreenerContext.Provider value={contextValue}>
      {children}
    </ScreenerContext.Provider>
  );
};
