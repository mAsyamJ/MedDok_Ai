export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({ 'name' : IDL.Text, 'role' : IDL.Text });
  return IDL.Service({
    'addUser' : IDL.Func([IDL.Text, IDL.Text], [IDL.Opt(User)], []),
    'getMyProfile' : IDL.Func([], [IDL.Opt(User)], []),
    'getUser' : IDL.Func([IDL.Principal], [IDL.Opt(User)], []),
    'helloWorld' : IDL.Func([], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
