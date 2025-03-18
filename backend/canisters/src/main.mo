import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Trie "mo:base/Trie";
import Debug "mo:base/Debug";

actor Main {
    public type User = {
        name: Text;
        role: Text;
    };
    stable var userProfiles : Trie.Trie<Principal, User> = Trie.empty();
    // add user
    public shared({ caller }) func addUser(name: Text, role: Text): async ?User {
        
        let callerKey = { hash = Principal.hash(caller); key = caller };
        let newUser: User = { name = name; role = role };
        let (newUserProfiles, _) = Trie.put(
            userProfiles,
            callerKey,
            Principal.equal,
            newUser
        );
        userProfiles := newUserProfiles;
        return ?newUser;
    };
    // get user profile by principal id
    public shared({ caller }) func getUser(userId : Principal) : async ?User {
        Debug.print("Getting user: " # Principal.toText(userId));
        
        let userKey = { hash = Principal.hash(userId); key = userId };
        Trie.get(userProfiles, userKey, Principal.equal)
    };
    //get user profile by caller id
    public shared({ caller }) func getMyProfile() : async ?User {
        let userKey = { hash = Principal.hash(caller); key = caller };
        Trie.get(userProfiles, userKey, Principal.equal)
    };
};