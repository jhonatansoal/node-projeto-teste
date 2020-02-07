const createRequest = require('../helpers/createRequest');
const PessoaBO = require('../core/businessOperation/PessoaBO');

const CONTROLLER_NAME = 'pessoaController'; // variavel global


module.exports = {
  /** --- GET ROLES ------------------------------------------- */
  getUmaPessoa: createRequest(CONTROLLER_NAME, 'getUmaPessoa', PessoaBO),
  getPessoa: createRequest(CONTROLLER_NAME, 'getPessoa', PessoaBO),
  criarPessoa: createRequest(CONTROLLER_NAME, 'criarPessoa', PessoaBO),
  atualizarPessoa: createRequest(CONTROLLER_NAME, 'atualizarPessoa', PessoaBO),

};
