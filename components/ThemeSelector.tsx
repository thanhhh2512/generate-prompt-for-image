import React, { useState } from 'react';
import type { Theme, ThemeCategory } from '../types';

interface ThemeSelectorProps {
    categories: ThemeCategory[];
    selectedThemes: Theme[];
    onToggleTheme: (theme: Theme) => void;
    disabled: boolean;
}

const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


const ThemeSelector: React.FC<ThemeSelectorProps> = ({ categories, selectedThemes, onToggleTheme, disabled }) => {
    const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());
    const [hoveredTheme, setHoveredTheme] = useState<Theme | null>(null);

    const handleCategoryClick = (categoryId: string) => {
        setOpenCategories(prev => {
            const newSet = new Set(prev);
            if (newSet.has(categoryId)) {
                newSet.delete(categoryId);
            } else {
                newSet.add(categoryId);
            }
            return newSet;
        });
    };
    
    const handleExpandAll = () => {
        const allCategoryIds = new Set(categories.map(c => c.id));
        setOpenCategories(allCategoryIds);
    };

    const handleCollapseAll = () => {
        setOpenCategories(new Set());
    };

    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100';
    const MAX_SELECTIONS = 6;

    return (
        <div className={`w-full transition-opacity duration-500 ${disabledClasses}`}>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-red-700 dark:text-red-500">Bước 2: Chọn chủ đề</h2>
                <span className="font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    Đã chọn: {selectedThemes.length} / {MAX_SELECTIONS}
                </span>
            </div>
            
            <div className="h-12 mb-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center transition-all duration-200 border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 italic">
                    {hoveredTheme?.description || 'Di chuột qua một chủ đề để xem mô tả.'}
                </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
                <button
                    onClick={handleExpandAll}
                    disabled={disabled}
                    className="text-xs font-medium text-red-600 hover:text-red-800 disabled:text-gray-400 dark:text-red-400 dark:hover:text-red-300 dark:disabled:text-gray-500 transition-colors"
                >
                    Mở tất cả
                </button>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <button
                    onClick={handleCollapseAll}
                    disabled={disabled}
                    className="text-xs font-medium text-red-600 hover:text-red-800 disabled:text-gray-400 dark:text-red-400 dark:hover:text-red-300 dark:disabled:text-gray-500 transition-colors"
                >
                    Thu gọn tất cả
                </button>
            </div>
            <div className="space-y-2">
                {categories.map((category) => {
                    const isOpen = openCategories.has(category.id);
                    return (
                        <div key={category.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                            <button
                                onClick={() => handleCategoryClick(category.id)}
                                className="w-full flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded-t-lg"
                                aria-expanded={isOpen}
                                disabled={disabled}
                            >
                                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category.name}</span>
                                <ChevronIcon open={isOpen} />
                            </button>
                            {isOpen && (
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {category.themes.map((theme) => {
                                        const isSelected = selectedThemes.some(t => t.id === theme.id);
                                        const canSelectMore = selectedThemes.length < MAX_SELECTIONS;

                                        return (
                                            <div
                                                key={theme.id}
                                                className={`
                                                    p-3 rounded-md text-sm font-medium transition-all duration-200 text-center
                                                    ${isSelected ? 'bg-yellow-400 text-black shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-red-100 dark:hover:bg-red-900/50'}
                                                    ${disabled || (!isSelected && !canSelectMore) ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
                                                `}
                                                onClick={() => !disabled && (isSelected || canSelectMore) && onToggleTheme(theme)}
                                                onMouseEnter={() => !disabled && setHoveredTheme(theme)}
                                                onMouseLeave={() => setHoveredTheme(null)}
                                                role="button"
                                                aria-pressed={isSelected}
                                                aria-label={`Select theme: ${theme.name}`}
                                            >
                                                {theme.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ThemeSelector;