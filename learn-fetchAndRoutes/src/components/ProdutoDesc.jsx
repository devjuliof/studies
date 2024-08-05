import React from 'react';
import { useParams } from 'react-router-dom';
import './ProdutoDesc.css';

const ProdutoDesc = () => {
  const produtoPath = useParams();

  const [infoProduto, setInfoProduto] = React.useState(null);

  React.useEffect(() => {
    async function fetchDadosComBaseNosParams() {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produtoPath.id}`,
      );
      const responseJson = await response.json();
      setInfoProduto(responseJson);
    }
    fetchDadosComBaseNosParams();
  }, [produtoPath]);

  const valoresDesejados = ['fotos', 'nome', 'preco', 'descricao'];

  return (
    <article className="ProdutoDesc">
      {infoProduto && (
        <>
          <div className="ProdutoDesc__img-container">
            {infoProduto.fotos && (
              <img src={infoProduto.fotos[0].src} alt="Produto" />
            )}
          </div>
          <div className="ProdutoDesc__info">
            {infoProduto.nome && (
              <h2 className="ProdutoDesc__nome">{infoProduto.nome}</h2>
            )}
            {infoProduto.preco && (
              <p className="ProdutoDesc__preco">{infoProduto.preco}</p>
            )}
            {infoProduto.descricao && (
              <p className="ProdutoDesc__desc">{infoProduto.descricao}</p>
            )}
          </div>
        </>
      )}
    </article>
  );
};

export default ProdutoDesc;
