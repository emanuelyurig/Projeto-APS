insert into credenciado (
    ds_credenciado,
    tp_credenciado,
    ds_endereco,
    nr_cep,
    nr_cpf_cnpj,
    nr_celular,
    ds_email) 
    values 
    (
        'Hospital São Vincente de Paulo',
        1, 
        'Rua Conde de Bonfim',
        20260280,
        1234567, 
        3872992,
        'hospital@saovincente.com'
    );

insert into especialidade (ds_especialidade) values ('Clinico geral');

insert into credenciado (
    ds_credenciado,
    tp_credenciado,
    ds_endereco,
    nr_cep,
    nr_cpf_cnpj,
    nr_celular,
    ds_email,
    crm,
    cd_especialidade) 
    values 
    (
        'Julio Batista',
        1, 
        'Rua Conde de Bonfim',
        20260280,
        1234567, 
        3872992,
        'medico-julio-batista@saovincente.com',
        1234,
        1
    );