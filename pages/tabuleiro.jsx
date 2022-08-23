import Bloco from "../components/Bloco";

export default function tabuleiro() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      {gerarTabuleiro(8)}
    </div>
  );
}

function gerarTabuleiro(tamanho) {
  const grid = [];
  const isEvenGrid = tamanho % 2 == 0;
  let id = 0;

  /* For da Linha */
  for (let i = 0; i < tamanho; i++) {
    const linha = [];
    const isEvenLine = i % 2 == 0;

    /* For de cada Bloco da linha */
    for (let j = 0; j < tamanho; j++) {
      const blocoId = ++id;
      let isEven = blocoId % 2 == 0;

      /* Se o tabuleiro for de um tamanho par, tem que inverter as cores da linha seguinte */
      if (isEvenGrid && isEvenLine) {
        isEven = !isEven;
      }

      /* Insere os blocos nessa linha */
      linha.push(gerarBloco(blocoId, isEven));
    }

    /* Inserindo cada linha gerada */
    grid.push(<div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }} key={i}>
      {linha}
    </div>);
  }

  return grid;
}
function gerarBloco(blocoId, isEven) {
  return <Bloco key={blocoId} index={blocoId} isEven={isEven} />;
}

