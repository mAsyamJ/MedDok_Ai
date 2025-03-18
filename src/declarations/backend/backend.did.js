export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({ 'name' : IDL.Text, 'role' : IDL.Text });
  return IDL.Service({
    'addNewUser' : IDL.Func([IDL.Text], [IDL.Text], []),
    'addUser' : IDL.Func([IDL.Text, IDL.Text], [IDL.Opt(User)], []),
    'getMyProfile' : IDL.Func([], [IDL.Opt(User)], []),
    'getUser' : IDL.Func([IDL.Principal], [IDL.Opt(User)], []),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
