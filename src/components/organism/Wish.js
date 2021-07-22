import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hammer from "react-hammerjs";

export default function Wish({ wish, onDelete, onModifiedWish }) {
  const [optionsShowed, setOptionsShowed] = useState(false);
  const [locationShowed, setLocationShowed] = useState(false);
  const [doChangeName, setChangeName] = useState(false);
  const [newWishLabel, setNewWishLabel] = useState(wish.name);
  let inputWishRef;

  const handlePan = (e) => {
    if (!locationShowed && e.additionalEvent === "panleft")
      setOptionsShowed(true);
    if (!locationShowed && e.additionalEvent === "panright")
      setOptionsShowed(false);
    if (!optionsShowed && e.additionalEvent === "panright")
      setLocationShowed(true);
    if (!optionsShowed && e.additionalEvent === "panleft")
      setLocationShowed(false);
  };
  useEffect(() => {
    if (doChangeName) inputWishRef = React.createRef();
  });

  const handlePress = (e) => {
    if (e.isFirst) {
      setChangeName(true);
      console.log("inputWishRef : ", inputWishRef);
    }
  };

  const handleNewName = (e) => setNewWishLabel(e.target.value);

  const optionsHammer = {
    recognizers: {
      press: {
        time: 600,
      },
    },
  };

  const leaveField = () => {
    setChangeName(false);
    onModifiedWish({ ...wish, name: newWishLabel });
  };

  return (
    <Hammer onPanEnd={handlePan} onPress={handlePress} options={optionsHammer}>
      <WishItemContainer>
        {!doChangeName && (
          <WishItem
            locationShowed={locationShowed}
            optionsShowed={optionsShowed}
          >
            {wish.name}
          </WishItem>
        )}
        {doChangeName && (
          <WishItemInput
            type="text"
            value={newWishLabel}
            onChange={handleNewName}
            optionsShowed={optionsShowed}
            onBlur={leaveField}
            ref={inputWishRef}
          />
        )}
        <WishItemOptions>
          <WishItemDelete onClick={() => onDelete(wish)}>❌</WishItemDelete>
        </WishItemOptions>
      </WishItemContainer>
    </Hammer>
  );
}
const WishItemContainer = styled.div`
  position: relative;
`;

const WishItem = styled.div`
  position: relative;
  z-index: 1;
  border: 2px solid #17c3b2;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background: linear-gradient(124deg, #f4f4f4 0%, #ffffff 100%);
  cursor: default;
  box-shadow: 0px 3px 5px 0px rgba(23, 195, 178, 0.15);
  user-select: none;
  transition: 0.15s ease;
  transform: translateX(
    ${(props) =>
      props.optionsShowed ? "-100px" : props.locationShowed ? "100px" : "0px"}
  );
  :hover {
    background: linear-gradient(124deg, rgb(23, 195, 178) -400%, #ffffff 100%);
  }
`;
const WishItemInput = styled.input`
  position: relative;
  width: calc(100% - 24px);
  outline: none;
  z-index: 1;
  border: 2px solid #17c3b2;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background: linear-gradient(124deg, #f4f4f4 0%, #ffffff 100%);
  cursor: default;
  box-shadow: 0px 3px 5px 0px rgba(23, 195, 178, 0.15);
  transition: 0.15s ease;
  :hover {
    background: linear-gradient(124deg, rgb(23, 195, 178) -400%, #ffffff 100%);
  }
`;

const WishItemOptions = styled.div`
  position: absolute;

  top: 0px;
  right: 0px;
  height: calc(100% - 10px);
`;
const WishItemDelete = styled.div`
  position: relative;
  height: 100%;
  background: #fe6d73;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  cursor: pointer;
`;
