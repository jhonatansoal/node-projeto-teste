module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    idPessoa: {
      type: DataTypes.INTEGER,
      field: 'id_pessoa',
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      field: 'nome',
    },
    email: {
      type: DataTypes.STRING,
      field: 'email',
    },
  }, {
    timestamps: false,
    tableName: 'pessoas',
    schema: 'public',
  });

  return Pessoa;
};
