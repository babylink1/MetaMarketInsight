const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImFhYWZkZjUwLWI3Y2EtNGIxZS04OWMyLTQ3ZGE4MzBiMWFiYSIsIm9yZ0lkIjoiMzkxMzgwIiwidXNlcklkIjoiNDAyMTU1IiwidHlwZUlkIjoiODQyNWZmZDQtZDVjMy00YTg4LWE2NGEtMjdjOWZlZTAzZDIwIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTUxMzg1OTUsImV4cCI6NDg3MDg5ODU5NX0.bmlWULUfiQkvP1nuSciDNo2kCbKQAm9inTsJnCEsZvU";

export const getContractNFTs = async (tokenAddress) => {
  let str = encodeURIComponent(tokenAddress);
  const url = new URL(`${origin}/api/v2/nft/${str}`);

  url.searchParams.append("chain", "eth");

  url.searchParams.append("format", "decimal");

  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",

      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);

  url.searchParams.append("chain", "eth");

  url.searchParams.append("marketplace", "opensea");

  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",

      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );

  url.searchParams.append("chain", "eth");

  url.searchParams.append("format", "decimal");

  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",

      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
