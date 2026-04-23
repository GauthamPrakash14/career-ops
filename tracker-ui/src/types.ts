export interface Application {
  id: number;
  date: string;
  company: string;
  role: string;
  score: number;
  scoreRaw: string;
  status: string;
  hasPdf: boolean;
  reportText: string;
  reportUrl: string;
  notes: string;
}
