create table usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade int
);

INSERT INTO usuarios(nome, email,idade) VALUES(
    "amanda",
    "ddd@cc.com",
    10
);

SELECT * FROM usuarios WHERE idade >11;

DELETE FROM usuarios WHERE ...

UPDATE usuarios SET nome = "";