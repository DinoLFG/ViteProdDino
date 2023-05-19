import "./Leaderboard.scss";
import DinoTable from "../../components/DinoTable/DinoTable";
import { StyledEngineProvider } from "@mui/material/styles";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMYID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function Leaderboard() {
  return (
    <>
      <div className="background" />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            accentColor: "rgb(9, 101, 90)",
            accentColorForeground: "white",
            borderRadius: "medium",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          <StyledEngineProvider injectFirst>
            <div className="dinoPage">
              <DinoTable />
            </div>
          </StyledEngineProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default Leaderboard;
