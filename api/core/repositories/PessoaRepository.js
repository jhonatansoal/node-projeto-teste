const logger = require('../../helpers/logger');
const models = require('../models');

const { Pessoa } = models; // padrão de projeto pattern do javascript usando spread na


class PessoaRepository {
  async atualizarPessoa({ idPessoa, nome, email }) {
    logger.debug('PessoaRepository.atualizarPessoa');// usa para debug - segue padrão para todas as classes/metodos
    return Pessoa.update(
      {
        nome,
        email,
      },
      {
        where: {
          idPessoa,
        },
      },
    );
  }
  async getUmaPessoa({ idPessoa }) {
    logger.debug('PessoaRepository.getUmaPessoa');// usa para debug - segue padrão para todas as classes/metodos
    return Pessoa.findOne({
      where: {
        idPessoa,
      },
    });
  }
  async getPessoa() {
    logger.debug('PessoaRepository.getPessoa');// usa para debug - segue padrão para todas as classes/metodos
    return Pessoa.findAll();
  }
  async criarPessoa(data) {
    logger.debug('PessoaRepository.criarPessoa');// usa para debug - segue padrão para todas as classes/metodos
    return Pessoa.create(data);
  }
}

module.exports = PessoaRepository;
