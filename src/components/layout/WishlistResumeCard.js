import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function GroupResumeCard({ wishlist }) {
  let history = useHistory();
  const enterToWishlist = () => history.push(`/wishlist/${wishlist.id}`);
  return (
    <ResumeCard data-wishlist-name={wishlist.name} onClick={enterToWishlist}>
      {wishlist.name}
    </ResumeCard>
  );
}

const ResumeCard = styled.div`
  background: #ffcb77;
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0px 5px 5px 0px rgba(255, 203, 119, 0.25);
  cursor: pointer;
  text-align: center;
`;
