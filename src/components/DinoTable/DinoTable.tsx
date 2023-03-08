import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./DinoTable.scss";
import dayjs from "dayjs";
import { buyDataModel, DinoTableModel, WalletRank } from "./model";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rank from "../RankComponent/Rank";
import Loader from "../Loader/Loader";
import { fetchData } from "../../utils/service";
import dinoLeader from "../../assetsDino/dinoLeader.png";
import dinoTail from "../../assetsDino/dinoTail.png";
import arrowUp from "../../assetsDino/arrowUp.png";
import copyIcon from "../../assetsDino/copyIcon.png";
import etherscanIcon from "../../assetsDino/etherscanIcon.png";
import ModalComponent from "../Modal/Modal";
import ConnectorButton from "../ConnectorButton/ConnectorButton";

const DinoTable = () => {
  const [data, setData] = useState<DinoTableModel[]>([]);
  const [dataHistory, setDataHistory] = useState<buyDataModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loaderLoading, setLoaderLoading] = useState(false);
  //const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [expandedRows, setExpandedRows] = useState<number>(-1);
  const [walletAddress, setWalletAddress] = useState<WalletRank | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const showLoader = loaderLoading || isLoading;

  const [dataF, setDataF] = useState<string>(
    dayjs().add(-1, "month").format("YYYY-MM-DD")
  );
  const [dataT, setDataT] = useState<string>(
    dayjs().add(1, "day").format("YYYY-MM-DD")
  );
  useEffect(() => {
    async function getData(fetchString: string) {
      const result = await fetchData(fetchString);
      const walletRanks = result.walletRank.map((rank: WalletRank) => ({
        address: rank.address,
        ethervalue: rank.ethervalue,
        rank: rank.rank,
        value: rank.value,
      }));
      setWalletAddress(walletRanks[0]);
    }

    const myWalletData = localStorage.getItem("wagmi.store");
    const parsedWalletData = JSON.parse(myWalletData || "{}");
    const fetchPathRanking = `${
      import.meta.env.VITE_API
    }/walletRank?dateFrom=${dataF}&dateTo=${dataT}&walletaddress=${
      parsedWalletData.state?.data?.account
    }`;
    if (parsedWalletData.state?.data?.account !== undefined) {
      getData(fetchPathRanking);
    }
  }, [dataF, dataT]);

  useEffect(() => {
    const fetchPath = `${
      import.meta.env.VITE_API
    }/transactions?dateFrom=${dataF}&dateTo=${dataT}`;
    setLoaderLoading(true);
    async function getData() {
      const result = await fetchData(fetchPath);
      setData(result?.walletRank);
      setIsLoading(false);
      setLoaderLoading(false);
    }
    setDataHistory([]);
    setExpandedRows(-1);

    getData();
  }, [dataT, dataF]);

  async function getDataHistory(fetch: string) {
    const result = await fetchData(fetch);
    setDataHistory(result.buys);
    console.log(dataHistory);
  }

  const handleRowExpand = (rowId: number, walletAddress: string) => {
    if (walletAddress !== "") {
      setDataHistory([]);
      const fetchPathHistory = `${
        import.meta.env.VITE_API
      }/buys?dateFrom=${dataF}&dateTo=${dataT}&wallet=${walletAddress}`;
      getDataHistory(fetchPathHistory);
    }
    setExpandedRows((prev) => (prev === rowId ? -1 : rowId));
    // const isRowExpanded = expandedRows.includes(rowId);
    // const newExpandedRows = isRowExpanded
    //   ? expandedRows.filter((id: number) => id !== rowId)
    //   : [...expandedRows, rowId];
    // setExpandedRows(newExpandedRows);
  };

  const handleCopy = (value: string, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(value);
    toast.success(`Copied to clipboard: ${value}`);
  };

  const handleRedirect = (
    value: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(`https://etherscan.io/address/${value}`);
  };

  return (
    <>
      {!isLoading && (
        <div className="dinoTable_wrapper">
          <div className="dinoTable_wrapper_filter">
            <div className="ranges_buttons">
              <button
                className="dinoTable_wrapper_filter_button"
                onClick={() => setOpen(true)}
              >
                Filters
              </button>
              <ConnectorButton />
            </div>
          </div>
          <div className="dinoFull">
            <img className="dinoTail" alt="tail" src={dinoTail} />
            <img className="dinoLeader" alt="character" src={dinoLeader} />
          </div>
          <div className="dinoTable">
            <div className="row header" id="row_header">
              <div className="cell">RANK</div>
              <div className="cell">Wallet</div>
              <div className="cell">Total ETH</div>
            </div>
          </div>
          <div className="dinoTable_2_wrapper">
            <table className="dinoTable" id="dinoTable_2">
              <tbody>
                {walletAddress && (
                  <tr className="row">
                    <td className="cell">
                      <Rank score={Number(walletAddress.rank)} />
                    </td>
                    <td className="cell">
                      <div className="cell_copy">
                        <td className="wallet_address" key={uuidv4()}>
                          {walletAddress.address}
                        </td>
                        <button
                          onClick={(event: React.MouseEvent<HTMLElement>) =>
                            handleRedirect(walletAddress.address, event)
                          }
                          className="copy_button"
                        >
                          <img
                            className="copy_button_icon"
                            id="etherscan_icon"
                            src={etherscanIcon}
                            alt="etherscan"
                          />
                        </button>
                        <button
                          onClick={(event: React.MouseEvent<HTMLElement>) =>
                            handleCopy(walletAddress.address, event)
                          }
                          className="copy_button"
                          key={uuidv4()}
                        >
                          <img
                            className="copy_button_icon"
                            src={copyIcon}
                            alt="copyIcon"
                            key={uuidv4()}
                          />
                        </button>
                      </div>
                    </td>
                    <td className="cell">
                      {Number(walletAddress.ethervalue).toFixed(3)}
                    </td>
                  </tr>
                )}
              </tbody>
              {data.map((item: DinoTableModel, index: number) => {
                return (
                  <tbody key={uuidv4()}>
                    <tr
                      className="row"
                      key={uuidv4()}
                      onClick={() => handleRowExpand(index, item.address)}
                    >
                      <td className="cell" key={uuidv4()}>
                        <Rank score={index + 1} key={uuidv4()} />
                      </td>
                      <td className="cell" key={uuidv4()}>
                        <div className="cell_copy" key={uuidv4()}>
                          <div className="wallet_address" key={uuidv4()}>
                            {item.address}
                          </div>
                          <button
                            onClick={(event: React.MouseEvent<HTMLElement>) =>
                              handleRedirect(item.address, event)
                            }
                            className="copy_button"
                            key={uuidv4()}
                          >
                            <img
                              className="copy_button_icon"
                              id="etherscan_icon"
                              src={etherscanIcon}
                              alt="etherscan"
                              key={uuidv4()}
                            />
                          </button>
                          <button
                            onClick={(event: React.MouseEvent<HTMLElement>) =>
                              handleCopy(item.address, event)
                            }
                            className="copy_button"
                            key={uuidv4()}
                          >
                            <img
                              className="copy_button_icon"
                              src={copyIcon}
                              alt="copyIcon"
                              key={uuidv4()}
                            />
                          </button>
                        </div>
                      </td>
                      <td className="cell" key={uuidv4()}>
                        {Number(item.ethervalue).toFixed(3)}
                      </td>
                    </tr>
                    {expandedRows === index && (
                      <>
                        <tr
                          className="row"
                          id="row_history_header"
                          key={uuidv4()}
                        >
                          <td className="cell" key={uuidv4()}>
                            <button
                              onClick={() => handleRowExpand(index, "")}
                              className="arrow_up_button"
                              key={uuidv4()}
                            >
                              <img
                                className="arrow_up"
                                src={arrowUp}
                                alt="arrowUp"
                                key={uuidv4()}
                              />
                            </button>
                          </td>
                          <td className="cell" key={uuidv4()}>
                            Transaction hash
                          </td>
                          <td className="cell" key={uuidv4()}>
                            Total Value
                          </td>
                        </tr>
                        <tr>
                          <td className="tdFix" colSpan={3}>
                            <div className="history_table">
                              {dataHistory?.map((historyItem: buyDataModel) => {
                                return (
                                  <div
                                    className="row"
                                    id="row_history"
                                    key={uuidv4()}
                                  >
                                    <div className="cell" key={uuidv4()}></div>
                                    <div className="cell" key={uuidv4()}>
                                      <div className="cell_copy" key={uuidv4()}>
                                        <div
                                          className="wallet_address"
                                          key={uuidv4()}
                                        >
                                          {historyItem.transactionhash}
                                        </div>
                                        <button
                                          key={uuidv4()}
                                          onClick={(
                                            event: React.MouseEvent<HTMLElement>
                                          ) =>
                                            handleCopy(
                                              historyItem.transactionhash,
                                              event
                                            )
                                          }
                                          className="copy_button2"
                                        >
                                          <img
                                            key={uuidv4()}
                                            className="copy_button2_icon2"
                                            src={copyIcon}
                                            alt="copyIcon"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                    <div className="cell" key={uuidv4()}>
                                      {Number(historyItem.ethervalue).toFixed(
                                        5
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                );
              })}
            </table>
          </div>
          <ToastContainer
            toastStyle={{ backgroundColor: "#38625a", color: "#fff" }}
            autoClose={1500}
            key={uuidv4()}
          />
        </div>
      )}
      {showLoader && <Loader />}
      {open && (
        <ModalComponent
          open={open}
          setOpen={setOpen}
          dataT={dataT}
          dataF={dataF}
          setDataF={setDataF}
          setDataT={setDataT}
        />
      )}
    </>
  );
};

export default DinoTable;
