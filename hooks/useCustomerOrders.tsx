import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/queries';

function useCustomerOrders(userId: string) {
  const { data, loading, error } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      trackingId: value.trackingId,
      shippingCost: value.shippingCost,
      Address: value.Address,
      City: value.customer,
      Lat: value.Lat,
      Lng: value.Lng,
    }));
  
    const customerOrders = orders.filter((order) => order.customer === userId);
     
    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, orders };
}

export default useCustomerOrders;
