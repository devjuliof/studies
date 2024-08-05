import React, { useEffect } from 'react';
import './Produtos.css';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [dados, setDados] = React.useState(null);

  useEffect(() => {
    async function fetchProdutos() {
      const responseFetch = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      const responseJson = await responseFetch.json();

      setDados(responseJson);
    }

    fetchProdutos();
  }, []);

  return (
    <article>
      {dados &&
        dados.map((produto) => (
          <div className="AppDivProduto" key={produto.id} id={produto.id}>
            <Link to={`produto/${produto.id}`}>
              <img src={produto.fotos[0].src} />
            </Link>
            <h2 style={{ color: 'black', textDecoration: 'none' }}>
              {produto.nome}
            </h2>
          </div>
        ))}
    </article>
  );
};

export { Produtos };
