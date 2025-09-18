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
        </main>
      </div>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
};

export default App;
