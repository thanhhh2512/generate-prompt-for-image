import React from 'react';
import type { PromptResults } from '../types';

type AddToastFunction = (message: string, type?: 'success' | 'error' | 'info', duration?: number) => string;

const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
    </svg>
);

const ResultCardLoader: React.FC<{ themeName: string }> = ({ themeName }) => (
    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 min-h-[200px] flex flex-col justify-center items-center">
        <div className="w-8 h-8 border-2 border-dashed rounded-full animate-spin border-yellow-400 mb-3"></div>
        <p className="text-sm font-semibold text-center text-gray-600 dark:text-gray-300">{themeName}</p>
        <p className="text-xs text-center text-gray-400">Đang tạo prompt...</p>
    </div>
);

const ResultCardSuccess: React.FC<{ themeName: string; prompt: string; addToast: AddToastFunction }> = ({ themeName, prompt, addToast }) => {
    const handleCopyPrompt = async () => {
        try {
            await navigator.clipboard.writeText(prompt);
            addToast('Đã sao chép prompt vào clipboard!', 'success', 3000);
        } catch (err) {
            console.error('Failed to copy prompt:', err);
            addToast('Không thể sao chép prompt. Vui lòng thử lại.', 'error', 3000);
        }
    };

    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg text-red-700 dark:text-red-500 mb-3">{themeName}</h3>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md mb-4 max-h-40 overflow-y-auto">
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{prompt}</p>
            </div>
            <button
                onClick={handleCopyPrompt}
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
            >
                <CopyIcon />
                Sao chép prompt
            </button>
        </div>
    );
};

interface ResultDisplayProps {
    promptResults: PromptResults;
    onReset: () => void;
    addToast: AddToastFunction;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ promptResults, onReset, addToast }) => {
    const resultIds = Object.keys(promptResults);

    if (resultIds.length === 0) {
        return (
            <div className="w-full flex flex-col items-center justify-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-inner h-full min-h-[400px] text-center">
                <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-500">Prompt sẽ hiển thị ở đây</h2>
                <p className="text-gray-500 dark:text-gray-400">Hãy chọn chủ đề và tạo prompt AI sáng tạo!</p>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="w-full flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-red-700 dark:text-red-500">Prompt của bạn!</h2>
                <button
                    onClick={onReset}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                    Tạo mới
                </button>
            </div>
            <div className="w-full grid grid-cols-1 gap-4">
                {resultIds.map((id) => {
                    const result = promptResults[id];
                    
                    if (result.status === 'generating') {
                        return <ResultCardLoader key={id} themeName={result.themeName} />;
                    }
                    
                    if (result.status === 'done' && result.generatedPrompt) {
                        return (
                            <ResultCardSuccess 
                                key={id} 
                                themeName={result.themeName} 
                                prompt={result.generatedPrompt}
                                addToast={addToast}
                            />
                        );
                    }
                    
                    return (
                        <div key={id} className="w-full bg-red-50 dark:bg-red-900/30 rounded-lg p-4 border-2 border-red-400 min-h-[200px] flex flex-col justify-center items-center">
                            <p className="text-sm font-bold text-center text-red-700 dark:text-red-300">{result.themeName}</p>
                            <p className="text-xs text-center text-red-500 dark:text-red-400 mt-2">{result.error || 'Có lỗi xảy ra'}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ResultDisplay;