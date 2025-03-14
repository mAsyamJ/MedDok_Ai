export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'predictDisease' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
