import { Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar";
import { ModalComponentModel } from "./model";
import "./ModalComponent.scss";

const ModalComponent: React.FC<ModalComponentModel> = ({
  open,
  setOpen,
  dataT,
  dataF,
  setDataT,
  setDataF,
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  const [dataFrom, setDataFrom] = useState<Dayjs | null>(dayjs(dataF));
  const [dataTo, setDataTo] = useState<Dayjs | null>(dayjs(dataT));
  const [activeFilter, setActiveFilter] = useState("");
  const allTimeDate = "11/11/2022";
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "#2b454e",
    border: "2px solid white",
    borderRadius: "20px",
    boxShadow: 0,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleDate = (type: string) => {
    if (type === "allTime") {
      setDataTo(dayjs().add(1, "day"));
      setDataFrom(dayjs(allTimeDate));
      handleFilterClick("filter1");
    }
    if (type === "daily") {
      setDataTo(dayjs().add(1, "day"));
      setDataFrom(dayjs());
      handleFilterClick("filter2");
    }

    if (type === "monthly") {
      setDataTo(dayjs().add(1, "day"));
      setDataFrom(dayjs().add(-1, "month"));
      handleFilterClick("filter3");
    }
  };

  useEffect(() => {
    if (dataTo != null && dataFrom != null) {
      if (dataTo < dataFrom) {
        toast.error("Incorrect Date, please try a different one");
      }
    }
    setActiveFilter("none");
    if (
      dataTo?.format("YYYY-MM-DD") ===
      dataFrom?.add(1, "day").format("YYYY-MM-DD")
    ) {
      setActiveFilter("filter2");
    }
    if (
      dataTo?.add(-1, "day").format("YYYY-MM-DD") ===
      dataFrom?.add(1, "month").format("YYYY-MM-DD")
    ) {
      setActiveFilter("filter3");
    }
    if (
      dataTo?.format("YYYY-MM-DD") ===
        dayjs().add(1, "day").format("YYYY-MM-DD") &&
      dataFrom?.format("YYYY-MM-DD") === dayjs(allTimeDate).format("YYYY-MM-DD")
    ) {
      setActiveFilter("filter1");
    }
  }, [dataTo, dataFrom]);

  const handleSubmit = () => {
    if (dataTo != null && dataFrom != null) {
      if (dataTo < dataFrom) {
        toast.error("Incorrect Date, please try a different one");
      } else {
        if (dataTo) {
          setDataT(dataTo.format("YYYY-MM-DD"));
        }
        if (dataFrom) {
          setDataF(dataFrom.format("YYYY-MM-DD"));
        }
      }
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: "auto" }}>
          <div className="dinoTable_wrapper_ranges">
            <div className="ranges_buttons">
              <button
                className={
                  activeFilter === "filter1"
                    ? "dinoTable_wrapper_ranges_button_active"
                    : "dinoTable_wrapper_ranges_button"
                }
                onClick={() => handleDate("allTime")}
              >
                All time
              </button>
              <button
                className={
                  activeFilter === "filter2"
                    ? "dinoTable_wrapper_ranges_button_active"
                    : "dinoTable_wrapper_ranges_button"
                }
                onClick={() => handleDate("daily")}
              >
                Daily
              </button>
              <button
                className={
                  activeFilter === "filter3"
                    ? "dinoTable_wrapper_ranges_button_active"
                    : "dinoTable_wrapper_ranges_button"
                }
                onClick={() => handleDate("monthly")}
              >
                Monthly
              </button>
            </div>
            <div className="ranges_calendars">
              <Calendar
                setData={setDataFrom}
                displayData={dataFrom}
                message="From"
              />
              <Calendar setData={setDataTo} displayData={dataTo} message="To" />
            </div>
          </div>
          <div className="modal_button_wrapper">
            <Button
              style={{ color: "#fff", fontFamily: "Balsamiq Sans, cursive" }}
              onClick={handleSubmit}
            >
              Filter
            </Button>
            <Button
              style={{ color: "#fff", fontFamily: "Balsamiq Sans, cursive" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
      <ToastContainer
        toastStyle={{ backgroundColor: "#2b454e", color: "#fff" }}
        autoClose={1500}
      />
    </React.Fragment>
  );
};

export default ModalComponent;
