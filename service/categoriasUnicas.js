export const pegaCategoria = (produtos) => {
  const categorias = [];
  produtos.forEach((produto) => {
    if (categorias.indexOf(produto.categoria) == -1) {
      categorias.push(produto.categoria);
    }
  });
  return categorias;
};
