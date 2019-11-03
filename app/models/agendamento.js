module.exports = (sequelize, DataTypes) => {
    const Agendamento = sequelize.define('Agendamento', {
        cd_agenda: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        dt_agenda: DataTypes.DATE,
        hr_inicio: DataTypes.TIME,
        hr_fim: DataTypes.DATE,
        vl_push_notificacao: DataTypes.CHAR,
        cd_credenciado: DataTypes.INTEGER,
        nr_matricula: DataTypes.INTEGER,
        cd_especialidade: DataTypes.INTEGER,
    }, {tableName: 'agendamento',     timestamps: false});

    return Agendamento;
}
