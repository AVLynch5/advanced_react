import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { getOrderTotal, getNumberOfDiners } from "../data/utilities";

import { UserContext } from '../App';

export const OrderSummary = ({ order }) => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  if (order?.userId === user?.id)
    return (
      <>
        <tr onClick={() => navigate(`/orders/${order?.id}`)}>
          <td>{order?.id}</td>
          <td>{order?.orderTime.toLocaleString()}</td>
          <td>{getOrderTotal(order)}</td>
          <td>{getNumberOfDiners(order)}</td>
        </tr>
      </>
    )
}