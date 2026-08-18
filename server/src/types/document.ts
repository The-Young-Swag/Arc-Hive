type DocumentStatus =
  | "uploaded"
  | "processing"
  | "completed"
  | "failed";

  export interface Document {
    id: string;
    filename: string;
    hash: string;
    mimetype: string;
    size: number;
    storagePath: string;
    status: DocumentStatus;
    category: string | null;
    summary: string | null;
    createdAt: Date;
    updatedAt: Date;
  }