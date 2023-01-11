/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export namespace script_service {
    export interface ListScriptRequest {
        pageSize?: number;
        page?: number;
    }
    export interface ListScriptResponse {
        scripts?: script_service.Script[];
    }
    // Create a new script.
    // This will create a new revision if the script already exists.
    export interface CreateScriptRequest {
        // Public identifier of the script.
        publicIdentifier?: string;
    }
    export interface DeleteScriptRequest {
        scriptId?: string;
    }
    export interface CreateRevisionRequest {
        scriptId?: string;
        bundle?: bundle.Bundle;
    }
    export interface GetRevisionRequest {
        id?: string;
    }
    export interface GetRevisionResponse {
        revision?: script_service.Revision;
    }
    export interface ListRevisionsRequest {
        pageSize?: number;
        page?: number;
        scriptId?: string;
    }
    export interface ListRevisionResponse {
        revisions?: script_service.Revision[];
    }
    export interface DeleteRevisionRequest {
        id?: string;
    }
    // Find an existing script by id.
    export interface FindScriptRequest {
        id?: string;
        publicName?: string;
        // Should bundle be included in response?.
        revisionRequestType?: FindScriptRequest.RevisionRequestType;
    }
    export namespace FindScriptRequest {
        // Find an existing script by id.
        export enum RevisionRequestType {
            // No revisions, only script info.
            NONE = 0,
            // Latest script revision
            LATEST = 1,
            // Get all script revisions.
            ALL = 2,
        }
    }
    export interface Revision {
        id?: string;
        created?: string;
        scriptId?: string;
        // Content bundle.
        bundle?: bundle.Bundle;
    }
    export interface Script {
        id?: string;
        // Public identifier of the script.
        publicIdentifier?: string;
        lastUpdated?: string;
        revisions?: script_service.Revision[];
    }
    export interface ScriptService {
        listScripts(
            data: ListScriptRequest,
            metadata?: Metadata,
            ...rest: any[]
        ): Observable<ListScriptResponse>;
        createScript(
            data: CreateScriptRequest,
            metadata?: Metadata,
            ...rest: any[]
        ): Observable<Script>;
        deleteScript(
            data: DeleteScriptRequest,
            metadata?: Metadata,
            ...rest: any[]
        ): Observable<google.protobuf.Empty>;
        getRevision(
            data: GetRevisionRequest,
            metadata?: Metadata,
            ...rest: any[]
        ): Observable<GetRevisionResponse>;
        createRevision(
            data: CreateRevisionRequest,
            metadata?: Metadata,
            ...rest: any[]
        ): Observable<Revision>;
        listRevisions(
            data: ListRevisionsRequest,
            metadata?: Metadata,
            ...rest: any[]
        ): Observable<ListRevisionResponse>;
        deleteRevision(
            data: DeleteRevisionRequest,
            metadata?: Metadata,
            ...rest: any[]
        ): Observable<google.protobuf.Empty>;
        queryScript(
            data: FindScriptRequest,
            metadata?: Metadata,
            ...rest: any[]
        ): Observable<Script>;
    }
}
export namespace bundle {
    export interface Bundle {
        entryPoint?: string;
        // File path name and file content
        files?: bundle.File[];
    }
    export interface File {
        fileName?: string;
        filePath?: string;
        content?: Uint8Array;
    }
}
export namespace google {
    export namespace protobuf {
        // tslint:disable-next-line:no-empty-interface
        export interface Empty {
        }
    }
}

