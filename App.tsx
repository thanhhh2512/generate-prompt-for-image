import React, { useState, useCallback, useEffect } from 'react';
import type { Theme, PromptResults } from './types';
import { THEME_CATEGORIES } from './constants';
import { useToast } from './hooks/useToast';

import Header from './components/Header';
import ThemeSelector from './components/ThemeSelector';
import ResultDisplay from './components/ResultDisplay';
import AnimatedBackground from './components/AnimatedBackground';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => {
  const [selectedThemes, setSelectedThemes] = useState<Theme[]>([]);
  const [promptResults, setPromptResults] = useState<PromptResults>({});
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const { toasts, addToast, removeToast } = useToast();

  useEffect(() => {
    // This effect runs once when the component mounts to behave as a cumulative visit counter.
    const currentCount = parseInt(localStorage.getItem('visitCount') || '0', 10);
    const newCount = currentCount + 1;
    localStorage.setItem('visitCount', newCount.toString());
    setVisitCount(newCount);
  }, []);

  const handleReset = useCallback(() => {
    setSelectedThemes([]);
    setPromptResults({});
    setIsGenerating(false);
  }, []);

  const handleToggleTheme = (theme: Theme) => {
    setSelectedThemes((prev) => {
      const isSelected = prev.some((t) => t.id === theme.id);
      if (isSelected) {
        return prev.filter((t: { id: string; }) => t.id !== theme.id);
      }
      if (prev.length < 6) {
        return [...prev, theme];
      }
      return prev;
    });
  };

  const handleGeneratePrompts = async () => {
    if (selectedThemes.length === 0) {
      return;
    }

    setIsGenerating(true);
    setPromptResults(
      selectedThemes.reduce((acc, theme) => {
        acc[theme.id] = { status: "generating", themeName: theme.name };
        return acc;
      }, {} as PromptResults)
    );

    // Simulate prompt generation with a small delay
    setTimeout(() => {
      const newResults = selectedThemes.reduce((acc, theme) => {
        acc[theme.id] = {
          status: "done",
          themeName: theme.name,
          generatedPrompt: theme.prompt,
        };
        return acc;
      }, {} as PromptResults);

      setPromptResults(newResults);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <AnimatedBackground />

      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="flex flex-col gap-8 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 lg:sticky lg:top-8">
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4 text-center text-red-700 dark:text-red-500">
                  Bước 1: Chọn chủ đề tạo prompt
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                  Chọn tối đa 6 chủ đề để tạo prompt AI sáng tạo
                </p>
              </div>

              <ThemeSelector
                categories={THEME_CATEGORIES}
                selectedThemes={selectedThemes}
                onToggleTheme={handleToggleTheme}
                disabled={isGenerating}
              />

              <div className="mt-4">
                <button
                  onClick={handleGeneratePrompts}
                  disabled={selectedThemes.length === 0 || isGenerating}
                  className="w-full bg-red-600 text-white font-bold py-4 px-4 rounded-lg text-lg
                                            hover:bg-red-700 transition-all duration-300
                                            disabled:bg-gray-400 disabled:cursor-not-allowed dark:disabled:bg-gray-600
                                            flex items-center justify-center shadow-lg transform hover:scale-105 disabled:scale-100"
                >
                  {isGenerating
                    ? "Đang tạo prompt..."
                    : `Tạo ${
                        selectedThemes.length > 0 ? selectedThemes.length : ""
                      } prompt`}
                </button>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <ResultDisplay
                promptResults={promptResults}
                onReset={handleReset}
                addToast={addToast}
              />
            </div>
          </div>

          <footer className="text-center mt-12 py-4 text-gray-500 dark:text-gray-400 text-sm">
            <div className="max-w-md mx-auto bg-amber-50/80 dark:bg-amber-900/50 backdrop-blur-sm border-2 border-amber-400 dark:border-amber-600 rounded-xl p-6 shadow-lg mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 0h10.5c.621 0 1.125-.504 1.125-1.125v-6.75c0-.621-.504-1.125-1.125-1.125H6.375c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 10.5V6.375c0-1.036-.84-1.875-1.875-1.875h-3.75c-1.036 0-1.875.84-1.875 1.875V10.5m0 0v5.625" />
              </svg>
              <p className="mt-4 font-bold text-lg text-amber-800 dark:text-amber-200">Nếu bạn thấy App hữu ích, hãy ủng hộ tác giả một ly cà phê nhé.</p>
              <div className="mt-4 space-y-2 text-base">
                <p>
                  <strong>Momo:</strong>
                  <span className="ml-2 font-mono bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-gray-800 dark:text-gray-200">0949435512</span>
                </p>
                <p>
                  <strong>Liên hệ công việc Zalo:</strong>
                  <span className="ml-2 font-mono bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-gray-800 dark:text-gray-200">0949435512</span>
                </p>
              </div>
            </div>
            
            <div className="space-y-4 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <p>Tạo prompt sáng tạo cho AI tạo ảnh. Prompt Generator - Tự hào Việt Nam.</p>
                <p className="mt-2">
                  Phát triển bởi <strong>Võ Quốc Hoàng</strong> - 
                  <a 
                    href="https://www.facebook.com/voquochoang82" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 font-semibold transition-colors"
                  >
                    {' '}Facebook
                  </a>
                </p>
              </div>
              {visitCount !== null && (
                <div>
                  <p className="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>Lượt truy cập: {visitCount.toLocaleString('vi-VN')}</span>
                  </p>
                </div>
              )}
            </div>
          </footer>
        </main>
      </div>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
};

export default App;
