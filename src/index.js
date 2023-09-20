import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './components/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App 컴포넌트가 렌더링되기 전 auth 관련 상태 정의할 수 있도록 provider로 wrapping
  <AuthProvider>
    <App />
  </AuthProvider>
);
