import { Button, Card, Input, Layout, List, message } from "antd";
import "./App.css";
import { useState } from "react";
import { getContractNFTs } from "./utils";
import NftCard from "./Components/NftCard";
import ContractTrades from "./Components/ContractTrades";

const { Header, Content } = Layout;

function App() {
  const [nfts, setNfts] = useState([]); //setNfts更新nfts变量的值
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    // if (searchText === "") {
    //   return;
    // }

    setLoading(true);

    try {
      const data = await getContractNFTs(searchText);
      setNfts(data.result);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
          NFT Browser
        </div>
      </Header>
      <Content
        style={{ height: "calc(100% - 64px)", padding: 20, overflow: "auto" }}
      >
        <Input.Group compact>
          <Input
            style={{ width: 500 }}
            placeholder="Enter a NFT contract address to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button loading={loading} type="primary" onClick={handleSearch}>
            Search
          </Button>
          <ContractTrades tokenAddress={searchText} />
        </Input.Group>
        <List
          loading={loading}
          style={{
            marginTop: 20,
            height: "calc(100% - 52px)",
            overflow: "auto",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={nfts}
          renderItem={(nft) => {
            return <NftCard nft={nft} />;
          }}
        />
      </Content>
    </Layout>
  );
}

export default App;
