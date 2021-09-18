import Orders from '../data/orders.json';
import {Order} from '../model/Order';

export function getOrders(): Order[] {
    const ordersList = [];

    for (const i of Orders) {
        const order: Order = new Order();
        const orderContentArr = [];

        order.orderNumber = i.orderNumber;

        for (const j of i.orderContents) {
            orderContentArr.push(j.item);
        }

        order.orderContents = orderContentArr;
        ordersList.push(order);
    }

    console.log(ordersList)
    return ordersList;
}