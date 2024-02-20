import { OrdersBoard } from "../OrdersBoard"
import { Container } from "./style"

export function Orders() {
    return (
        <Container>
           <OrdersBoard
            icon='⏳'
            title='Fila de espera'
            orders={[]}
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