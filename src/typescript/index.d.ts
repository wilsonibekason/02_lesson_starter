import { Patch } from "immer";

interface AssetMetaDataType<T = unknown> {
  _type: "response";
  body: T;
  utl: string;
  method: string;
  statusCode: number;
  statusMessage?: string;
  headers: Record<string, string>;
}

type QueryParams = { [key: string]: any };
type MutationSelection = { query: string } | { id: string };
type SanityReference = { _ref: string };

interface SanityProjectMember {
  id: string;
  role: string;
  isRobot: boolean;
  isCurrentUser: boolean;
}

interface SanityProject {
  id: string;
  displayName: string;
  studioHost: string | null;
  organisationId: string | null;
  isBlocked: boolean;
  pendingInvites?: number;
  members: SanityProjectMember[];
  metadata: {
    color?: string;
    externalStudioHost?: string;
  };
}

type GetItReuester = {
  use: (middleware: any) => GetItReuester;
  clone(): GetItReuester;
};

export type InsertPatch =
  | { before: string; items: any[] }
  | { after: string; items: string }
  | { replace: string; items: any[] };

export interface PatchOperations {
  set?: { [key: string]: any };
  insert?: InsertPatch;
}

export type PatchBuilder = (patch: Patch) => Patch;

// exporting interfaces

export type PatchMutationOperation = PatchOperations;

export type Mutation<R = any> =
  | { create: MutationSelection }
  | { patch: PatchMutationOperation };

export interface MultipleMutationResult {
  transactionId: string;
  documentId: string[];
  result: { id: string; operation: muta };
}

export type MutationEvent<R = any> = {
  type: "mutation";
  documentId: string;
  eventId: string;
  identity: string;
  mutations: Mutation[];
  previousRev?: string;
  resultRev?: string;
  result?: SanityDocument<R>;
  previous?: SanityDocument<R> | null;
  effects?: { apply: unknown[]; revert: unknown[] };
  timestamp: string;
  transactionId: string;
  transition: "update" | "appear" | "disappear";
  visibility: "query" | "transaction";
};

// when defining types the always statte the type of the type object
export type ListenEvent = {
  type: "channelError";
  message: string;
};

export type WelcomeEvent = {
  type: "reconnect";
  reason: string;
};
