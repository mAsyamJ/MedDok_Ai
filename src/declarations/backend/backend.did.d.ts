import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface User { 'name' : string, 'role' : string }
export interface _SERVICE {
  'addNewUser' : ActorMethod<[string], string>,
  'addUser' : ActorMethod<[string, string], [] | [User]>,
  'getMyProfile' : ActorMethod<[], [] | [User]>,
  'getUser' : ActorMethod<[Principal], [] | [User]>,
  'whoami' : ActorMethod<[], Principal>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
