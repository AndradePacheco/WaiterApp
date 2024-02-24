import { OrdersBoard } from "../OrdersBoard"
import { Container } from "./style"
import { Order } from "../../types/Order"

const orders: Order[] = [
    {
        '_id': '753893857jfjk873374fjk83324',
        'table': '123',
        'status': 'WAITING',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijos',
                    'imagePath': '1707692765751-quatro-queijos.png',
                    'price': 40,
                },
                'quantity': 3,
                '_id': '6334abc3i3983acb3889f'
            },
            {
                'product': {
                    'name': 'Coca Cola',
                    'imagePath': '1707766724632-coca-cola.png',
                    'price': 7,
                },
                'quantity': 2,
                '_id':'28374hfkah9843hkjdf'
            }
        ]
    },
    {
        '_id': '753893857jfjk873374fjk83324',
        'table': '1',
        'status': 'WAITING',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijos',
                    'imagePath': '1707692765751-quatro-queijos.png',
                    'price': 40,
                },
                'quantity': 3,
                '_id': '6334abc3i3983acb3889f'
            },
            {
                'product': {
                    'name': 'Coca Cola',
                    'imagePath': '1707766724632-coca-cola.png',
                    'price': 7,
                },
                'quantity': 2,
                '_id':'28374hfkah9843hkjdf'
            }
        ]
    }
]

export function Orders() {
    return (
        <Container>
           <OrdersBoard
            icon='⏳'
            title='Fila de espera'
            orders={orders}
           />
           <OrdersBoard
            icon='👨‍🍳'
            title='Em preparação'
            orders={[]}
           />
           <OrdersBoard
            icon='✅'
            title='Pronto'
            orders={[]}
           />
        </Container>
    )
}