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
        page?: number;
        totalPages?: number;
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
        projectConfig?: string;
        bundle?: bundle.Bundle;
    }
    export interface GetRevisionRequest {
        id?: string;
        // Should bundle be included with revision.
    // If false then this will only include revision info.
        withBundle?: boolean;
    }
    // Return revision info.
    export interface ListRevisionsRequest {
        pageSize?: number;
        page?: number;
        // Script id, otherwise this will show all revisions in general.
        scriptId?: string;
    }
    // List of revision info.
    export interface ListRevisionResponse {
        page?: number;
        totalPages?: number;
        revisions?: script_service.Revision[];
    }
    export interface DeleteRevisionRequest {
        id?: string;
    }
    // Find an existing script by id.
    export interface FindScriptRequest {
        id?: string;
        publicName?: string;
    }
    export interface Revision {
        id?: string;
        created?: string;
        scriptId?: string;
        projectConfig?: string;
        // Content bundle.
        bundle?: bundle.Bundle;
    }
    export interface Script {
        id?: string;
        // Public identifier of the script.
        publicIdentifier?: string;
        lastUpdated?: string;
        currentRevisionId?: string;
    }
    export interface ScriptService {
        queryScript(
            data: FindScriptRequest,
            metadata?: Metadata,
            ...rest: any[]
        ): Observable<Script>;
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
        ): Observable<Revision>;
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
    }
}
export namespace bundle {
    export interface Bundle {
        entryPoint?: string;
        // File path name and file content
        files?: bundle.File[];
    }
    export interface File {
        revisionId?: string;
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

