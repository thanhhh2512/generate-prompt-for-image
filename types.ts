export interface Theme {
  id: string;
  name: string;
  prompt: string;
  thumbnail: string;
  description?: string;
}

export interface ThemeCategory {
  id: string;
  name: string;
  themes: Theme[];
}

export type PromptGenerationStatus = 'ready' | 'generating' | 'done' | 'error';

export interface PromptResult {
  status: PromptGenerationStatus;
  themeName: string;
  generatedPrompt?: string;
  error?: string;
}

export type PromptResults = Record<string, PromptResult>;