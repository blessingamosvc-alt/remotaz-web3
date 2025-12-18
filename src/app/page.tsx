'use client';

import React, { useState } from 'react';
import { HomeView } from '@/components/remotaz/HomeView';
import { ClientView } from '@/components/remotaz/ClientView';
import { WorkerView } from '@/components/remotaz/WorkerView';
import { ViewType } from '@/types/remotaz';

export default function RemotatWebsite() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  return (
    <div>
      {currentView === 'home' && <HomeView setCurrentView={setCurrentView} />}
      {currentView === 'client' && <ClientView setCurrentView={setCurrentView} />}
      {currentView === 'worker' && <WorkerView setCurrentView={setCurrentView} />}
    </div>
  );
}
