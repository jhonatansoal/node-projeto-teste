const logger = require('../../helpers/logger');
const PessoaRepository = require('../repositories/PessoaRepository');
// const { Exception, errorDefinitions } = require('../../helpers/errors');

const Dependency = {
  PessoaRepository,
};

class PessoaBO {
  constructor(params) {
    this.pessoaRepository = new Dependency.PessoaRepository();
    this.params = params;
  }
  async atualizarPessoa() {
    logger.debug('PessoaBO.atualizarPessoa');// usa para debug
    const idPessoa = (this.atualizarPessoa.idPessoa || {}).value;
    const nome = this.params.body.originalValue.nome || {};
    const email = this.params.body.originalValue.email || {};
    const data = await this.pessoaRepository.atualizarPessoa({
      idPessoa, nome, email,
    });
    if (data === null) { return {}; }
    return data;
  }
  async getUmaPessoa() {
    logger.debug('PessoaBO.getUmaPessoa');// usa para debug
    const idPessoa = (this.params.idPessoa || {}).value;
    const data = await this.pessoaRepository.getUmaPessoa({
      idPessoa,
    });
    if (data === null) { return {}; }
    return data;
  }
  async getPessoa() {
    logger.debug('PessoaBO.getPessoa');// usa para debug
    const nome = (this.params.nome || {}).value;
    const email = (this.params.email || {}).value;
    const limite = (this.params.limite || {}).value;
    const offset = (this.params.offset || {}).value;

    const data = await this.pessoaRepository.getPessoa({
      nome,
      email,
      limite,
      offset,
    });
    return data;
  }
  async criarPessoa() {
    logger.debug('PessoaBO.criarPessoa');// usa para debug
    const { nome, email } = (this.params.body || {}).value;
    const data = await this.pessoaRepository.criarPessoa({
      nome,
      email,
    });
    return data;
  }
}

module.exports = PessoaBO;
