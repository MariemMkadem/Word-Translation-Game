export interface WordData {
    word: string;
    firstLetter: string;
    length: number;
    translation: string;
  }

export interface GameContextProps {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  wordData: Pick<WordData, 'word' | 'firstLetter' | 'length'>;
  checkTranslation: (input: string) => void;
  gameOver: boolean;
  resetGame: () => void;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>
  }