import React, { ReactNode, createContext, useContext, useState } from 'react';

interface CollectPointContextData {
  collectPointId: number | null;
  setCollectPointId: (id: number | null) => void;
}

const CollectPointContext = createContext<CollectPointContextData | undefined>(undefined);

export const useCollectPoint = (): CollectPointContextData => {
  const context = useContext(CollectPointContext);

  if (!context) {
    throw new Error('useCollectPoint deve ser usado dentro de CollectPointProvider');
  }

  return context;
};

export const CollectPointProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [collectPointId, setCollectPointId] = useState<number | null>(null);

  return (
    <CollectPointContext.Provider value={{ collectPointId, setCollectPointId }}>
      {children}
    </CollectPointContext.Provider>
  );
};
