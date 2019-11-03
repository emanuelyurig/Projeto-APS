module.exports = (sequelize, DataTypes) => {
    const Credenciado = sequelize.define('Credenciado', {
        cd_credenciado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        crm: DataTypes.INTEGER,
        nr_cep: DataTypes.INTEGER,
        ds_email: DataTypes.STRING,
        ds_endereco: DataTypes.STRING,
        nr_cpf_cnpj: DataTypes.STRING,
        nr_celular: DataTypes.INTEGER,
        nr_telefone: DataTypes.INTEGER,
        ds_credenciado: DataTypes.STRING,
        tp_credenciado: DataTypes.INTEGER,
        cd_especialidade: DataTypes.INTEGER
    }, {tableName: 'credenciado', timestamps: false});

    return Credenciado;
}